import { useLocation, useParams } from "react-router-dom";
import Analysis from "../analysis";
import Summary from "../summary";
import useAnswer from "../../database/hooks/useAnswer";
import _ from "lodash";

export default function Result() {
  const { id } = useParams();
  const location = useLocation();
  const { state } = location;
  const { qna } = state; // This is my copy state too


  const { loading, error, answers } = useAnswer(id);

  function calculate() {
    let score = 0;

    answers.forEach((question, index1) => {
      let correctIndex = [],
        checkedIndex = [];

      question.options.forEach((option, index2) => {
        if (option.correct) correctIndex.push(index2);
        if (qna[index1].options[index2].checked) {
          checkedIndex.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndex, checkedIndex)) {
        score += 5;
      }
    });
    return score;
  }

  const useScore = calculate();

// console.log(answers);

  return (
    <div className="container">
      {loading && <div> Loading...</div>}
      {error && <div>There was an error </div>}
      <Summary score={useScore} noq={answers.length} />
      <Analysis answers={answers} />
      {/* <p>Soumik Sarkar</p> */}
    </div>
  );
}
