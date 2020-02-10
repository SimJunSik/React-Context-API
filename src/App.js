import React from 'react';
import ColorBox from './components/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColros from './components/SelectColors';

// Provider를 사용할 때는 항상 value를 명시해 주어야 함
function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColros />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
