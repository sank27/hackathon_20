import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App_Ed_Res from './educating-resources/App_Ed_Res_Function'



ReactDOM.render(
  <React.StrictMode>
    <App />
    <App_Ed_Res /> 
  </React.StrictMode>,
  document.getElementById('root')
);

