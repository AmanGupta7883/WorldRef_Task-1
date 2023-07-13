import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://insights.worldref.co/wp-json/wl/v1/w-insights');
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
          {data && (
            <ul>
              {data.map((item, i) => (
                <ul style={{"border":"1px solid black","margin":"0.8rem 0"}}>
                  <li>{i}</li>
                  <li>{item.title}</li>
                  <li>{item.permalink}</li>
                </ul>
              ))}
            </ul>
          )}
    </div>
  );
};

export default App;
