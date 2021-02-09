import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App_Ed_Res from './educating-resources/App_Ed_Res_Function'
import VR from './vr'


ReactDOM.render(
  <React.StrictMode>
    <App_Ed_Res /> 
    <App />
    <VR/>
  </React.StrictMode>,
  document.getElementById('root')
);

