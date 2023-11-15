import { useEffect, useState } from "react";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";

export default function useAnswer(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswer] = useState([]);

  useEffect(() => {
    async function fetachAnswer() {
      const db = getDatabase();
      const AnswerRef = ref(db, "answers/" + videoID + "/questions");
      const AnswerQuery = query(AnswerRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(AnswerQuery);
        setLoading(false);

        if (snapshot.exists()) {
          setAnswer((prevAnswers) => {
            return [...prevAnswers, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetachAnswer();
  }, [videoID]);

  return {
    loading,
    error,
    answers,
  };
}
