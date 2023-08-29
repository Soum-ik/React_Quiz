import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useQuestionList from "../../database/hooks/useQuestion";
import Answers from "../answers";
import { useAuth } from "../context/Auth_contexts";
import MiniPlayer from "../miniPlayer";
import ProgressBar from "../progressber";

const Initialstate = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;

      return questions;
    default:
      return state;
  }
};

export default function Quiz() {
  const { id } = useParams();
  const { loading, error, questions } = useQuestionList(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, Initialstate);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  function handleAnswersChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  //  When user can click the answers
  function nextQuestion() {
    if (currentQuestion <= questions.length) {
      return setCurrentQuestion((prevCurrent) => prevCurrent + 1);
      // console.log("hello");
    }
  }

  function previousQuestion() {
    if (currentQuestion > 1 && currentQuestion <= questions.length) {
      return setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  }

  // calculate percentage of progress
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0; // percentage of progress

  // submit quiz
  async function submit() {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });
    navigate(`/Result_page/${id}`, { state: { qna } });
  }

  // console.log(uid);
  return (
    <>
      {loading && <div>loading ...</div>}
      {error && <div>There was an error</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            options={qna[currentQuestion].options}
            handleChange={handleAnswersChange}
          />
          <ProgressBar
            prev={previousQuestion}
            next={nextQuestion}
            progress={percentage}
            submit={submit}
          />
          <MiniPlayer />
        </>
      )}
    </>
  );
}
