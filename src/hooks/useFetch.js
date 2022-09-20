import { useState, useEffect } from 'react';

const useFetch = (endPoint) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await fetch(endPoint).then((res) => res.json());
    setData(response);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [endPoint]);

  return data;
};

export default useFetch;
