import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import './vr.css'
import vr from './1.jpg';

export default (props) => {
  return (
    <div className="container-vr">
    <Scene embedded>
        <img id="city" crossOrigin="anonymous" src={vr} />
        

      {/* <!-- 360-degree image. --> */}
      <a-sky id="image-360" radius="10" src="#city"
             animation__fade="property: components.material.material.color; type: color; from: #FFF; to: #000; dur: 300; startEvents: fade"
             animation__fadeback="property: components.material.material.color; type: color; from: #000; to: #FFF; dur: 300; startEvents: animationcomplete__fade"></a-sky>

      {/* <!-- Image links. --> */}
      <Entity id="links" layout="type: line; margin: 1.5" position="0 -1 -4">
        {/* <Entity template="src: #link" data-src="#city" data-thumb="#cubes-thumb"></Entity>
        <Entity template="src: #link" data-src="#city" data-thumb="#city-thumb"></Entity>
        <Entity template="src: #link" data-src="#city" data-thumb="#sechelt-thumb"></Entity>         */}
      </Entity> 
        
      

      {/* -- Camera + cursor. -- */}
      <Entity>
      <a-cursor
          id="cursor"
          animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150"
          animation__fusing="property: fusing; startEvents: fusing; from: 1 1 1; to: 0.1 0.1 0.1; dur: 1500"
          event-set__mouseenter="_event: mouseenter; color: springgreen"
          event-set__mouseleave="_event: mouseleave; color: black"
          raycaster="objects: .link"></a-cursor>
      </Entity>

    </Scene>

    </div>


  );
}