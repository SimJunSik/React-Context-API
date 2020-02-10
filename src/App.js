import React from 'react';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';

// Provider를 사용할 때는 항상 value를 명시해 주어야 함
function App() {
  return (
    <ColorContext.Provider value={{ color: 'red' }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
}

export default App;
