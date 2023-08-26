import { useEffect, useState } from "react";
import {
  get,
  getDatabase,
  orderByKey,
  query,
  ref,
} from "firebase/database";

export default function useQuestionList(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    async function fetachVideos() {
      const db = getDatabase();
      const questionRef = ref(db, "quiz/" + videoID + "questions");
      const questionQuery = query(questionRef, orderByKey());
      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(questionQuery);
        setLoading(false);

        if (snapshot.exists()) {
          setQuestion((prevQuestion) => {
            return [...prevQuestion, ...Object.values(snapshot.val())];
          });
        }
        console.log(question);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    setTimeout(() => {
      fetachVideos();
    }, 2000);
  }, [videoID]);

  return {
    loading,
    error,
    question,
  };
}
