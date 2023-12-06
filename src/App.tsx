import { useEffect, useRef, useState } from 'react';
import './App.css'
import FirstPicture from './components/firstpicture';
import BoxTwo from './components/secondpicture';
import ThirdPicture from './components/thirdpicture';


const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');
  const isInitialMount = useRef(true);
  
  useEffect(() => {
    if (isInitialMount.current) {
      console.log('firstRender');
      isInitialMount.current = false;
    } else {
      console.log('render');
    }
  });
  
  useEffect(() => {
    console.log('changingCount');
  }, [count]);
  
  useEffect(() => {
    console.log('inputChange');
  }, [inputText]);
  
  const handleButtonClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

return (
    <>
    <div className='App'>
      <FirstPicture />
      <div className='second-picture'>
        <div className='box'>
          <button type='button' className='dropdown-color' onClick={handleButtonClick}>+</button>
          <div>Count: {count}</div>
          <input
            type='text'
            className='writes-the-same-thing'
            placeholder='Write something.. '
            onChange={handleInputChange}
            value={inputText}
          />
          <div>{inputText}</div>
        </div>
        <BoxTwo />
      </div>
      <ThirdPicture />
    </div>
    </>
  )
}

export default App
