import { useState, useRef, useEffect } from "react";

 
 const FirstPicture: React.FC = () => {
    const [text, setText] = useState('');
    const [submittedText, setSubmittedText] = useState('');
    const placeholderInputRef = useRef<HTMLInputElement>(null);
    const [counter, setCounter] = useState(5);
    const [isActive, setIsActive] = useState(false);
    const [count, setCount] = useState(0);
    const [colors, setColors] = useState<string[]>([]);
    const [currentColor, setCurrentColor] = useState<string>('#ffffff');
    const [showColorPicker, setShowColorPicker] = useState<boolean>(false);




  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmittedText(text);
    setText('');
    if (placeholderInputRef.current) {
      placeholderInputRef.current.focus();
    }
  };
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isActive && counter > 0) {
      timer = setTimeout(() => setCounter(counter - 1), 1000);
    } else if (counter === 0) {
      window.location.reload();
    }
    return () => clearTimeout(timer);
  }, [counter, isActive]);
  const handleRefreshClick = () => {
    setCounter(5);
    setIsActive(true);
  };
  const handleCountClick = () => {
    setCount(prevCount => prevCount + 1);
  };
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentColor(event.target.value);
  };
  const finalizeColor = () => {
    if (colors.length < 3) {
      setColors([...colors, currentColor]);
    }
    setShowColorPicker(false);
  };
  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  }
return (
    <div className='first-picture'>
        <div className='inputs'>
          <input 
            type='text'
            className='the-focused-one' 
            placeholder='Write someting.. ' 
            autoFocus>
          </input>
          <br></br>
          <form onSubmit={handleSubmit}>
            <input 
                type='text'
                className='placeholder'
                placeholder='Write something.. ' 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                ref={placeholderInputRef}>
            </input>
            <button type='submit' className='second-input'>Submit</button>
          </form>
          {submittedText && <p>{submittedText}</p>}
          <br></br>
        </div>
        <div className='two-more-buttons'>
          <button 
            type='button'
            className={`not-responsive ${isActive ? 'timer-active' : ''}`} 
            onClick={handleRefreshClick} 
            disabled={isActive}>
            {isActive ? counter : 'Click on me'}</button>
          <button 
            type='button'
            className='countiing' 
            onClick={handleCountClick}>
            {count === 0 ? 'Do you want to see me count?' : `Count: ${count}`}
          </button>
          {count > 0 && (
            <div>
              The count is two times more: {count * 2}
            </div>
          )}
        </div>
        <div className='dropdown'>
            <button 
                type='button' 
                className='dropdown-color' 
                onClick={toggleColorPicker} >
            +
            </button>
            {showColorPicker && (
            <>
                <input 
                    type="color"
                    className="color-picker-input" 
                    value={currentColor} 
                    onChange={handleColorChange} >
                </input>
                <button 
                    type='button' 
                    className="done-button" 
                    onClick={finalizeColor}>
                    Done
                </button>
            </>
            )}
            <div className='color-boxes'>
                {colors.map((color, index) => (
                <div key={index} className="color-box" style={{ backgroundColor: color }}/>
                ))}
            </div>
      </div>
      </div>
)
 }
 export default FirstPicture;