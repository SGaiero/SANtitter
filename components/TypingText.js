import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text }) => {
  const [display, setDisplay] = useState('');


  useEffect(() => {
    let i = 0;
    setTimeout(() => {
      const typing = setInterval(() => {
        setDisplay(text.slice(0, i));
        i++;
        if (i > text.length) clearInterval(typing);
      }, 100);
      return () => clearInterval(typing);
    }, 1500) 
  }, [text]);

  return <Typography fontSize={30}>{display}</Typography>;
};

export default TypingEffect;