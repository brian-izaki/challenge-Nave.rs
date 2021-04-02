import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import reportWebVitals from './reportWebVitals';

const theme = {
  mainColor: '#212121',
  backgroundColor: '#FFFFFF',
  zIndex: {
    maxLevel: 1000,
    mediumLevel: 900, 
    minLevel: 0,
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
