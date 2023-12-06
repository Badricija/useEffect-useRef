import React, { useRef } from 'react';

const ThirdPicture: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const boxContainerRef = useRef<HTMLDivElement>(null);

  const handleAddBox = () => {
    if (boxRef.current) {
      boxRef.current.style.backgroundColor = 'gold';
    }
  };

  const handleDuplicateBox = () => {
    if (boxContainerRef.current && boxRef.current) {
      const clone = boxRef.current.cloneNode(true) as HTMLDivElement;
      clone.style.position = ''; // Remove any absolute positioning from the clone
      clone.textContent = ''; // Remove text for the clones
      boxContainerRef.current.appendChild(clone);
    }
  };

  const handleMoveBox = () => {
    if (boxRef.current) {
      boxRef.current.style.position = 'absolute';
      boxRef.current.style.top = '0';
      boxRef.current.style.right = '0';
      boxRef.current.textContent = "I'm in a corner, hihi";
    }
  };

  return (
    <div className='third-picture' style={{ position: 'relative' }}>
      <button type='button' className='change-box-color' onClick={handleAddBox}>Let me show you a trick</button>
      <button type='button' className='duplicate-box' onClick={handleDuplicateBox}>Let me show you a trick</button>
      <button type='button' className='move-box' onClick={handleMoveBox}>Let me show you a trick</button>
      <div ref={boxContainerRef} style={{ whiteSpace: 'nowrap' }}>
        <div ref={boxRef} className='moving-box'>
          {/* Initial content can go here */}
        </div>
      </div>
    </div>
  );
};

export default ThirdPicture;
