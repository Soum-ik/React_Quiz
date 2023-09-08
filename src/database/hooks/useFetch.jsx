import {
  useEffect,
  useState
} from "react";

function useFetch(url, mehtod, headers) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
      async function requestFetch() {
          try {
              setLoading(true);
              setError(true);
              const response = await fetch(url, {
                  method: mehtod || "GET",
                  headers: headers
              });
              const data = await response.json();
              setLoading(false);
              setError(false);
              setResult(data)
          } catch (err) {
              console.log(err)
              setLoading(false)
              setError(true)
          }
      }

      requestFetch()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
      loading,
      error,
      result
  }
}

export default useFetch;