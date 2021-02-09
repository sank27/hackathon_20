import './../App.css';
import './App_Ed_Res_Function.css'

var root = document.documentElement;
const lists = document.querySelectorAll('.hs'); 

lists.forEach(el => {
  const listItems = el.querySelectorAll('li');
  const n = el.children.length;
  el.style.setProperty('--total', n);
});

function App_Educating_Resources() {
  return (
    <div className="container">
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
                  - Give tips on things to do with your amazon waste
                    -DIY Ideas for projects to do with the bags/boxes
                  -Signing petitions on the local/state level
                  -Ask companies to provide transparent climate data 
                  -Limiting home plastic use
                    -Metal Water Bottle
                    -Reuseable containers (Link below for crafts)
                    -https://www.diyncrafts.com/27162/repurpose/30-amazing-upcycling-ideas-turn-grocery-bags-spectacular-creations
                  -.... 
              - include external links 
                  - research reputable, useful external resources
                  -https://www.noaa.gov/
                  -https://www.nps.gov/index.htm
                  -
                  -
                  -

            If Time: 
              - include educator's compiliation of resources
                - purpose is to tie in the VR education purpose 

        */} 

        {/* https://css-tricks.com/practical-css-scroll-snapping/ */}
        <main className="container">
          <section className="child"> 
              <h1>Title</h1>
              <div className="sources"> 
                <div>And here's some text</div>
                <div>And here's some more</div>
              </div>
          </section>
          <section className="child">
              <h1>Second Section</h1>
              <div className="sources"> 
                <div>And here's some text</div>
                <div>And here's some more</div>
              </div>
          </section>
          <section className="child">
              <h1>Third Section</h1>
              <div className="sources"> 
                <div>And here's some text</div>
                <div>And here's some more</div>
              </div>
          </section>
          <section className="child">
              <h1>Fourth Section</h1>
              <div className="sources"> 
                <div>And here's some text</div>
                <div>And here's some more</div>
              </div>
          </section>
          <section className="child">
              <h1>Fifth Section</h1>
              <div className="sources"> 
                <div>And here's some text</div>
                <div>And here's some more</div>
              </div>
          </section>
        </main>


      </header>
    </div>
    </div>
  );
}

export default App_Educating_Resources;
