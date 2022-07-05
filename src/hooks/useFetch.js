import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPanding, setisPanding] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for the  resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setisPanding(false);
        })
        .catch((e) => {
          setisPanding(false);
          setError(e.message);
        });
    }, 1000);
  }, [url]);
  return { data, isPanding, error };
};

export default useFetch;
