import React, { useState, useEffect } from 'react';
import './App.css';
import { NewImageButton } from './NewImageButton';

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
        <p>The current message is {currentMessage}</p>
        <img src={currentImage} alt='CT'/>
        <NewImageButton/>
      </header>
    </div>
  );
}

export default App;
