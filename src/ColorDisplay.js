import React from 'react';
import { useColor } from './ColorContext';

const ColorDisplay = () => {
  const { state } = useColor();
  const { red, green, blue } = state;

  const containerStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    border: '1px solid black',
  };

  return <div style={containerStyle} />;
};

export default ColorDisplay;
