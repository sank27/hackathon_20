import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App_Ed_Res from './educating-resources/App_Ed_Res_Function'
import ImageGallery from './image_gallery/vr'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <App_Ed_Res /> 
    {/* <ImageGallery /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

