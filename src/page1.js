import React, { useState } from 'react';
import img1 from "./image/img1.jpeg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Page1 = () => {
  const [ text2 ] = useTypewriter({
    words: ['Razor', 'Quality', 'Precision', 'Artistry', 'Refinement'],
    loop: true, 
    typeSpeed:50,
    deleteSpeed:50,
  });

  const [text, setText] = useState('');

  function handleText(event) {
    const newText = event.target.value;
    setText(newText);
  }

  return (
    <div className='container'>
      <div className="image-wrapper">
        <img src={img1} className="image" alt="Groomers" />
        <h1 className="Heading">Groomers</h1>
        <h1 className="heading2">
          Where Confidence Meets the <span style={{ fontWeight: 'bold', color: 'green' }}>{text2}</span>
          <Cursor />
        </h1>
        <h1 className="image-text">Want our Service in - <span style={{ color: 'pink', fontWeight: 'bold' }}>{text}</span></h1>
        <div className="input-adjust">
          <input type='text' placeholder='Type City Here' className='input' onChange={handleText} value={text} />
        </div>
      </div>
    </div>
  );
}

export default Page1;
