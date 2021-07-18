import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentMessage, setCurrentMessage] = useState('Hi');
  const [currentImage, setCurrentImage] = useState(null);
  const [imageID, setImageID] = useState(0);

  useEffect(() => {
    fetch('/api/message').then(res => res.json()).then(data => {
      setCurrentMessage(data.message);
    })
  }, []);

  useEffect(() => {
    setCurrentImage('/api/image/sandbox')
  }, []);

  function handleButtonClick(val) {
    setImageID(imageID + 1);
    setCurrentImage(val);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>The current message is {currentMessage}</p>
        <img src={currentImage} alt='CT'/>
        <NewImageButton imageID={imageID} onButtonClick={handleButtonClick}/>
      </header>
    </div>
  );
}

const NewImageButton = (props) => {
  const handleButtonClick = () => {
    let uri = '/api/image/sandbox' + props.imageID
    props.onButtonClick(uri)
  }
  return <button onClick={handleButtonClick}>New Image</button>
}

export default App;
