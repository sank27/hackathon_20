import logo from './../logo.svg';
import './../App.css';
import './App_Ed_Res_Function.css'

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
        <div class="container">
          <section class="child"><h1>First Section</h1></section>
          <section class="child"><h1>Second Section</h1></section>
          <section class="child"><h1>Third Section</h1></section>
          <p>...</p>
        </div>


      </header>
    </div>
  );
}

export default App_Educating_Resources;
