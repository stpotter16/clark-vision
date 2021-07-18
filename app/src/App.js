import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentImage, setCurrentImage] = useState(null);
  const [imageID, setImageID] = useState(0);

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
