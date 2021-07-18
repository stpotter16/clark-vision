import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentMessage, setCurrentMessage] = useState('Hi');
  const [currentImage, setCurrentImage] = useState(null)

  useEffect(() => {
    fetch('/api/message').then(res => res.json()).then(data => {
      setCurrentMessage(data.message);
    })
  }, []);

  useEffect(() => {
    setCurrentImage('/api/image/sandbox')
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>The current message is {currentMessage}</p>
        <img src={currentImage} alt='Image'/>
      </header>
    </div>
  );
}

export default App;
