import React, { act, useState } from 'react';
import './Circles.css'; // Import the CSS file for styling

const Circles = () => {
    const [activeIndex, setActiveIndex] = useState(-1); // Index of the last active circle

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
       <div className='circle-container'>  
        {[...Array(5)].map((_,i) => (
            <div key={i} 
            className={i <= activeIndex ? 'circle active' : 'circle'}
            onClick={()=>handleClick(i)}></div>
        ))}
       </div>
    );
};

export default Circles;
