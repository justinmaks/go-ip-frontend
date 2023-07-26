import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080');
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
      <h2>IP Info</h2>
      <p>IP: {data.ip}</p>
      <p>Country: {data.country}</p>
      <p>Region: {data.region}</p>
      <p>City: {data.city}</p>
    </div>
  );
};

export default ApiData;
