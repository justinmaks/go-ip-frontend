import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Stats = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/stats');
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? <div>Loading...</div> : (
    <div>
      <h2>Stats</h2>
      <p>US Requests: {data.us_requests}</p>
      <p>Non-US Requests: {data.non_us_requests}</p>
    </div>
  );
};

export default Stats;
