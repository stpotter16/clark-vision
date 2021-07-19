import React, { useState, useEffect } from 'react';
import './App.css';
import Canvas from './Canvas';
import NewImageButton from './NewImageButton';

function App() {
  const [currentImage, setCurrentImage] = useState(null);
  const [imageID, setImageID] = useState(0);

  useEffect(() => {
    setCurrentImage('/api/image/sandbox')
  }, []);

  const handleButtonClick = (val) => {
    setImageID(imageID + 1);
    setCurrentImage(val);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={currentImage} alt='CT'/>
        <NewImageButton imageID={imageID} onButtonClick={handleButtonClick}/>
        <Canvas/>
      </header>
    </div>
  );
}

export default App;
