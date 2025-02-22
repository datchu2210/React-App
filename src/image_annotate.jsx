import React from 'react';
import { ImageAnnotator } from 'react-image-annotate';

const MyAnnotator = () => {
  const images = [
    {
      src: './assests/config.png',
      name: 'My Image',
    },
  ];

  return (
    <ImageAnnotator
      selectedImage={images[0]}
      taskDescription="# Draw regions around each object in the image."
      onExit={(output) => console.log('Annotations:', output)}
    />
  );
};

export default MyAnnotator;
