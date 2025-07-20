import React, { useEffect } from 'react';
import { GlobalStyle, ThemeProvider } from '@react95/core';
import { createGlobalStyle } from 'styled-components';
import DataService from '../services/dataService';
import DataContext from '../contexts/dataContext';
import Taskbar from './Taskbar';
import Desktop from './Desktop';
import { playMouseUpSound } from '../utils/playClickSound';
import { playMouseDownSound } from '../utils/playClickSound';
import './App.css';


const dataService = new DataService();

const BodyFontSizeOverride = createGlobalStyle`
  body{
    font-size: 15px
  }
`;


const App = () => {
  useEffect(() => {
    const handleMouseDown = () => playMouseDownSound();
    const handleMouseUp = () => playMouseUpSound();

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);


    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp)
    };
  }, []);


return (
  <DataContext.Provider value={dataService}>
    <ThemeProvider>
      <GlobalStyle />
      <BodyFontSizeOverride />

      <Desktop />
      <Taskbar />
    </ThemeProvider>
  </DataContext.Provider>
);
}

export default App;
