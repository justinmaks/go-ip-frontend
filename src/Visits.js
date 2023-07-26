import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Visits = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/visits');
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
      <h2>Visits</h2>
      {data.map((visit, index) => (
        <div key={index}>
          <p>IP: {visit.ip}</p>
          <p>Country: {visit.country}</p>
        </div>
      ))}
    </div>
  );
};

export default Visits;
