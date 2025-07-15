import React from 'react';
import ReactDOM from 'react-dom/client';

function HelloReact() {
  return <h1>Hello from React! fff sddds</h1>;
}

export default HelloReact;

const rootElement = document.getElementById('hello-react');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<HelloReact />);
}