import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function AngleSelector() {
  const [angle, setAngle] = useState(0);

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value)) value = 0;
    value = Math.min(Math.max(value, 0), 360);
    setAngle(value);
  };

  const handleSliderChange = (e) => {
    setAngle(parseInt(e.target.value, 10));
  };

  const handleRadioChange = (e) => {
    setAngle(parseInt(e.target.value, 10));
  };

  return (
    <div className="container">
      <h2>Angle Selector</h2>
      <input
        type="number"
        value={angle}
        onChange={handleInputChange}
        min="0"
        max="360"
      />
      <input
        type="range"
        value={angle}
        onChange={handleSliderChange}
        min="0"
        max="360"
        className="slider"
      />
      <div>
        <label>
          <input
            type="radio"
            name="presetAngle"
            value="0"
            checked={angle === 0}
            onChange={handleRadioChange}
          />
          0°
        </label>
        <label>
          <input
            type="radio"
            name="presetAngle"
            value="45"
            checked={angle === 45}
            onChange={handleRadioChange}
          />
          45°
        </label>
        <label>
          <input
            type="radio"
            name="presetAngle"
            value="60"
            checked={angle === 60}
            onChange={handleRadioChange}
          />
          60°
        </label>
        <label>
          <input
            type="radio"
            name="presetAngle"
            value="90"
            checked={angle === 90}
            onChange={handleRadioChange}
          />
          90°
        </label>
        <label>
          <input
            type="radio"
            name="presetAngle"
            value="180"
            checked={angle === 180}
            onChange={handleRadioChange}
          />
          180°
        </label>
      </div>
    </div>
  );
}

export default AngleSelector;