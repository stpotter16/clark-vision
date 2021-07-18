import React from 'react';

const NewImageButton = (props) => {
  const handleButtonClick = () => {
    let uri = '/api/image/sandbox' + props.imageID
    props.onButtonClick(uri)
  }
  return <button onClick={handleButtonClick}>New Image</button>
}

export default NewImageButton
