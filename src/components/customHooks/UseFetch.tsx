import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url: string, options?: any) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (options && options.method && options.method.toLowerCase() === 'post') {
          response = await axios.post(url, options.data);
        } else {
          response = await axios.get(url);
        }
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, loading, error };
};

export default useFetch;
