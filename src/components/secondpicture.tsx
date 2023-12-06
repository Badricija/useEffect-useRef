import React, { useState, useEffect, useRef } from 'react';

const BoxTwo: React.FC = () => {
  const [count, setCount] = useState(100);
  const [inputText, setInputText] = useState('');
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      console.log('firstRender');
      isInitialMount.current = false;
    } else {
      setCount(0);
    }
  }, []);

  useEffect(() => {
    if (inputText !== '') {
      document.title = inputText;
    }
  }, [inputText]);

  const handleButtonClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <div className='box-twoo'>
      <button type='button' className='dropdown-color' onClick={handleButtonClick}>+</button>
      <div style={{ fontSize: `${count}px` }}>Count: {count}</div>
      <input
        type='text'
        className='writes-the-same-thing'
        placeholder='Write something.. '
        onChange={handleInputChange}
        value={inputText}
      />
      <div>{inputText}</div>
    </div>
  );
};

export default BoxTwo;
