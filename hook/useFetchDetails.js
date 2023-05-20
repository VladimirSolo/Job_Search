import React, { useEffect, useState } from "react";

export default function useFetchDetails(id) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://whispering-acute-orchid.glitch.me/api/${id}`
      );
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("Error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
}
