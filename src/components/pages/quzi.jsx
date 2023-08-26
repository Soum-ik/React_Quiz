import Answers from "../answers";
import ProgressBar from "../progressber";
import MiniPlayer from "../miniPlayer";
import useQuestionList from "../../database/hooks/useQuestion";
import { useParams } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import _ from "lodash";

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
      questions[action.questionID].option[action.optionIndex].checked =
        action.value;
      return questions;

    default:
      return state;
  }
};

export default function Quiz() {
  const { id } = useParams();
  const { loading, error, question } = useQuestionList(id);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [qna, dispatch] = useReducer(reducer, Initialstate);

  console.log(qna);
  useEffect(() => {
    dispatch({
      type: "questions",
      value: question,
    });
  }, [question]);

  return (
    <>
      <h1>{qna[currentQuestion].title}</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
}
