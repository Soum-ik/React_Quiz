import { useEffect, useState } from "react";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";

export default function useQuestionList(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestion] = useState([]);

  useEffect(() => {
    async function fetachVideos() {
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoID + "/questions");
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(quizQuery);
        setLoading(false);

        if (snapshot.exists()) {
          setQuestion((prevQuestions) => {
            return [...prevQuestions, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetachVideos();
  }, [videoID]);

  return {
    loading,
    error,
    questions,
  };
}
