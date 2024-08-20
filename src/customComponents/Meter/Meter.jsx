import React from 'react';
import { Box, Typography } from '@mui/material';
import './Meter.css';

const Meter = ({ value, dotColors, text }) => {
  return (
    <Box className="meter-container">
      <Typography className="meter-text" variant="subtitle1">
        {text}
      </Typography>
      <Box className="meter-dots">
        {dotColors.map((color, index) => (
          <div
            key={index}
            className={`dot dot${index + 1}`}
            style={{ backgroundColor: color }}
          ></div>
        ))}
        <Typography className="meter-value" variant="h5">
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default Meter;
