"use client"
import { useState } from 'react';

function ToggleDivs() {
  // State to control visibility
  const [isDivVisible, setDivVisible] = useState(false);

  // Toggle function
  const handleToggle = () => {
    setDivVisible(!isDivVisible);
  };

  return (
    <div>
      {/* First Div */}
      <div
        onClick={handleToggle}
        style={{
          padding: '20px',
          backgroundColor: 'lightblue',
          cursor: 'pointer',
        }}
      >
        Click me to {isDivVisible ? 'hide' : 'show'} another div
      </div>

      {/* Conditionally render the second div */}
      {isDivVisible && (
        <div
          style={{
            marginTop: '20px',
            padding: '20px',
            backgroundColor: 'lightcoral',
          }}
        >
          This is the second div that appears on click!
        </div>
      )}
    </div>
  );
}

export default ToggleDivs;
