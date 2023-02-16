import React from 'react';
import Root from './root';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useThemeContext } from './context/Theme';
export default function App() {
  const [state] = useThemeContext();
  console.log(state);
  const theme = {
    light: {
      bg: '#f8f9fa',
      second_bg: '#fdfdfd',
      main_bg: '#e9ebee',
      logo1: '#E21221',
      logo2: '#3D3C3C',
      text: '#222',
      shadow: 'rgb(0 0 0 / 16%) 0 2px 2px 0, rgb(0 0 0 / 8%) 0 0 0 1px; ',
    },
    dark: {
      bg: '#1b1b1b',
      second_bg: '#282828',
      logo1: '#3D3C3C',
      logo2: '#8D0000',
      main_bg: '#282828',
      text: '#f8f9fa',
      shadow: 'inset 0 2px 0px #3a3b33, 0 2px 5px #000',
    },
  };
  return (
    <ThemeProvider theme={theme[state.dark ? 'dark' : 'light']}>
      <Router>
        <Root />
      </Router>
    </ThemeProvider>
  );
}
