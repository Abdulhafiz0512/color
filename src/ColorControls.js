import React from 'react';
import { useColor } from './ColorContext';

const ColorControls = () => {
  const { state, dispatch } = useColor();
  const { red, green, blue } = state;

  return (
    <div>
      <div>
        <label>R</label>
        <input
          type="number"
          value={red}
          onChange={(e) => dispatch({ type: 'SET_RED', payload: parseInt(e.target.value) })}
        />
      </div>
      <div>
        <label>G</label>
        <input
          type="number"
          value={green}
          onChange={(e) => dispatch({ type: 'SET_GREEN', payload: parseInt(e.target.value) })}
        />
      </div>
      <div>
        <label>B</label>
        <input
          type="number"
          value={blue}
          onChange={(e) => dispatch({ type: 'SET_BLUE', payload: parseInt(e.target.value) })}
        />
      </div>
    </div>
  );
};

export default ColorControls;
