import React, { useState } from "react";
import ReactDOM from 'react-dom/client';

export default function Counter() {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <div>
        <button onClick={handleDecrement}>-</button>
        <span> {count} </span> snehal
        <button onClick={handleIncrement}>+</button>
    </div>
  );
}

const rootElement = document.getElementById('counter');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<Counter />);
}