import React from 'react';
import { ColorProvider } from './ColorContext';
import ColorDisplay from './ColorDisplay';
import ColorControls from './ColorControls';
import "./App.css"
const App = () => {
  return (
    <ColorProvider>
      <div className='App'>
        <h1>Container</h1>
        <div style={{ display: 'flex', justifyContent:"center", gap:"20px"}}>
          <ColorDisplay />
          <ColorControls />
        </div>
      </div>
    </ColorProvider>
  );
};

export default App;
