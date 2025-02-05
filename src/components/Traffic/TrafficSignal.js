import React, { useState, useEffect } from 'react';
import './TrafficSignal.css'; // Import the CSS file for styling

const TrafficSignal = () => {
  const [activeLight, setActiveLight] = useState('red'); // 'red', 'yellow', 'green'

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight((prev) => {
        if (prev === 'red') return 'yellow';
        if (prev === 'yellow') return 'green';
        return 'red';
      });
    }, 2000); // Change light every 2 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div className="traffic-signal">
      <div
        className={`light red ${activeLight === 'red' ? 'active' : ''}`}
      ></div>
      <div
        className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}
      ></div>
      <div
        className={`light green ${activeLight === 'green' ? 'active' : ''}`}
      ></div>
    </div>
  );
};

export default TrafficSignal;
