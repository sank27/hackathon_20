import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';

export default (props) => {
  return (
    <Scene>
      <a-assets>
        <img id="city" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-cubes.jpg" />
        <img id="city-thumb" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-city.jpg" />
        <img id="cubes-thumb" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-cubes.jpg" />
        <img id="sechelt-thumb" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-sechelt.jpg" />
        <audio id="click-sound" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"></audio>
        <img id="cubes" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/cubes.jpg" />
        <img id="sechelt" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg" />

      </a-assets>

      {/* <!-- 360-degree image. --> */}
      <a-sky id="image-360" radius="10" src="#city"
             animation__fade="property: components.material.material.color; type: color; from: #FFF; to: #000; dur: 300; startEvents: fade"
             animation__fadeback="property: components.material.material.color; type: color; from: #000; to: #FFF; dur: 300; startEvents: animationcomplete__fade"></a-sky>

      {/* <!-- Image links. --> */}
      <Entity id="links" layout="type: line; margin: 1.5" position="0 -1 -4">
        <Entity template="src: #link" data-src="#cubes" data-thumb="#cubes-thumb"></Entity>
        <Entity template="src: #link" data-src="#city" data-thumb="#city-thumb"></Entity>
        <Entity template="src: #link" data-src="#sechelt" data-thumb="#sechelt-thumb"></Entity>        
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




  );
}