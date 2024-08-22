import React, { useEffect, useState } from 'react';
import './FadingText.css';
function FadingText() {

  const [text, setText] = useState('');
  const fullText = "Hi! there i'm David Arroyo Pichardo    ";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prevText) => {
        const newText = fullText.slice(0, index + 1);
        index = (index + 1) % fullText.length;
        return newText;
      });
    }, 500); // Ajusta el intervalo aquí para más retraso 

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="text-container">
      <div className="fading-text">
        {text.split('').map((char, index) => (
          <span key={index} className="fade">{char}</span>
        ))}
      </div>
    </div>
  );

}

export default FadingText;
