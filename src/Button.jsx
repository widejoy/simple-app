import React, { useState } from 'react';

const Button = () => {
  const [clickCount, setClickCount] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ['red', 'green', 'blue'];

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const buttonStyle = {
    backgroundColor: colors[currentColorIndex],
    padding: '10px 20px',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div>
      <button style={buttonStyle} onClick={handleClick}>
        Click Me
      </button>
      <p>Clicked: {clickCount} times</p>
    </div>
  );
};

export default Button;
