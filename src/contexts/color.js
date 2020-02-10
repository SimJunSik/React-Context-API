import { createContext } from 'react';

// createContext의 default parameter값은 Provider를 사용하지 않았을 때만 사용됨
const ColorContext = createContext({ color: 'black' });

export default ColorContext;
