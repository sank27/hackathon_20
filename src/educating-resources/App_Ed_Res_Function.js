import logo from './../logo.svg';
import './../App.css';
import './App_Ed_Res_Function.css'
import $ from 'jquery';

var root = document.documentElement;
const lists = document.querySelectorAll('.hs'); 

lists.forEach(el => {
  const listItems = el.querySelectorAll('li');
  const n = el.children.length;
  el.style.setProperty('--total', n);
});

// var child_1 = $('child:nth-child(1n)');
// var child_2 = $('child:nth-child(2n)');

// var backgrounds_1 = new Array(
//     'nature.jpg',
//     'pollution.jpg' 
//   );

// var backgrounds_2 = new Array(
//     'sustainable.jpg',
//     'powerStation.jpg'
//   );

// var current = 0;

// function nextBackground(background_arr) {
//     current++; 
//     current = current%2; 
//     child_1.css('background-image', backgrounds_1[current]); 
//     child_2.css('background-image', backgrounds_2[current]); 
// }
// setInterval(nextBackground, 1000);

// child_1.css('background-image', backgrounds_1[0]); 
// child_2.css('background-image', backgrounds_2[0]); 

function App_Educating_Resources() {
  return (
    <div className="App_Educating_Resources">
      <header className="App-header">
        {/* TODO: Change logo and Header
        // <img src={logo} className="App-logo" alt="logo" /> */}
      
        {/* TODO
            Scrolling Background 
              - implement user scroll 
                - ??? horizontally or vertically -> leaning towards horizontally 
                - create containing element within webpage to contain objects to scroll through 
                - add button or mouse over object, OR have timed scroll? -> leaning away from timed
              - import backgrounds 
              - overlay info boxes for personal change and corporate/societal change 
              - match info content to different backgrounds, have info content scroll with backgrounds 
                - need topic ideas to match background ideas (5-10???)
                  - reduce covid specific waster over beaches filled with masks (specific resource for this)
                  - reduce energy usage where climate change is causing devastating effects 
                  - reduce plastic waste where sea life or other animals are being affected 
                  - .... 
              - include external links 
                  - research reputable, useful external resources

            If Time: 
              - include educator's compiliation of resources
                - purpose is to tie in the VR education purpose 

        */} 

        {/* https://css-tricks.com/practical-css-scroll-snapping/ */}
        <main class="container">
          <section class="child"> 
              <h1>COVID-19 Impacts</h1>
              <div class="sources"> 
                <div>Personal Impacts</div>
                <div>Global Impacts</div>
              </div>
          </section>
          <section class="child">
              <h1>Improve Carbon Footprint</h1>
              <div class="sources"> 
                <div>Traveling Using Eco-Friendly Ways</div>
                <div>Conserving At Home</div>
              </div>
          </section>
          <section class="child">
              <h1>Mitigate Plastic Waste</h1>
              <div class="sources"> 
                <div>Upcycle</div>
                <div>Recycling Properly</div>
              </div>
          </section>
          <section class="child">
              <h1>Better Energy Usage</h1>
              <div class="sources"> 
                <div></div>
                <div>And here's some more</div>
              </div>
          </section>
          <section class="child">
              <h1>Change in the Corporate World</h1>
              <div class="sources"> 
                <div>Buy Local</div>
                <div></div>
              </div>
          </section>
          <section class="child">
              <h1>Spread Awareness</h1>
              <div class="sources"> 
                <div>And here's some text</div>
                <div>And here's some more</div>
              </div>
          </section>
        </main>


      </header>
    </div>
  );
}

export default App_Educating_Resources;
