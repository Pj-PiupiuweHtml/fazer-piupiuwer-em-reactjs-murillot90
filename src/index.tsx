import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle, GlobalTypography, StylizedScrollbars } from './assets/styles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalTypography/>
    <StylizedScrollbars/>
    <GlobalStyle/>

    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

