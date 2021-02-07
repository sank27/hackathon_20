import logo from './../logo.svg';
import './../App.css';
import './App_Ed_Res_Function.css'

import React from 'react';
import ReactDOM from 'react-dom';
import {SocialIcon} from 'react-social-icons'; 

var root = document.documentElement;
const lists = document.querySelectorAll('.hs'); 

lists.forEach(el => {
  const listItems = el.querySelectorAll('li');
  const n = el.children.length;
  el.style.setProperty('--total', n);
});

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
                <div><h1>Individual Impacts</h1>
                    The effects of improperly disposed masks can be seen&nbsp;
                    <a href="https://oceansasia.org/beach-mask-coronavirus/">on beaches of Soko&apos;s Islands</a>. 
                    <br/>From the mishandling of the insuragence of waste to increased single-use products, there has been more waste pollution due to Covid-19.
                    <br/>Due to the pandemic, many companies have shifted to using&nbsp;
                      <a href="https://www.nytimes.com/2020/04/24/us/california-plastic-bag-ban-coronavirus.html">more plastic&nbsp;</a> 
                      as well as <a href="https://www.bbc.com/news/uk-51767092">single-use items</a> which has caused an influx of waste pollution.
                      Individually, we all make an impact in the ways we choose to adjust to the pandemic and the ways we work to reduce our waste production.
                      <br/>

                </div>
                <div><h2>Global Impacts</h2><br/>
                    As companies have shifted their policies in the wake of the pandemic, there are calls to continue addressing&nbsp;
                    <a href=''>the issue of waste production.</a> Innovation, ideas and new designs are needed in <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7324921/'>rethinking and optimizing plastic waste management.</a>
                    <br/><br/>Additionally, YOU can <a href='https://www.change.org/t/plastic-waste-en-us'>urge change</a> in businesses and policy
                    to aid in the <a href='https://www.change.org/m/protect-our-waters-say-no-to-plastic-waste'>mitigation of excessive waste.</a>
                </div>
              </div>
          </section>
          <section class="child">
              <h1>Improve Carbon Footprint</h1>
              <div class="sources"> 
                <div><h1>Traveling Using Eco-Friendly Ways</h1>
                Cities offer low cost alternatives to traveling that don't envolve owning a personal vehicle.&nbsp;
                
                </div>
              
                <div><h1>Making Diet Choices</h1>
                This may sound scary, but it's definetly not as bad as it sounds.&nbsp;
                </div>
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
<<<<<<< HEAD
                <div>Using Heating Or Cooling Only When Needed</div>
                <div>Turning Off Lights</div>
=======
                <div><h1>To Come: Ways to Improve Individual Energy Consumption</h1></div>
                <div><h1>To Come: Ways to Improve Infrastructure of Energy Consupmtion</h1></div>
>>>>>>> 8e2e32c8eb92b394fecb125738a0d168ccf3ddd0
              </div>
          </section>
          <section class="child">
              <h1>Change in the Corporate World</h1>
              <div class="sources"> 
<<<<<<< HEAD
                <div>Buy Local</div>
                <div>Learn About The Company</div>
=======
                <div><h1>To Come: Ways to Encourage Large Scale Change as an Individual</h1></div>
>>>>>>> 8e2e32c8eb92b394fecb125738a0d168ccf3ddd0
              </div>
          </section>
          <section class="child">
              <h1>Spread Awareness</h1>
              <div class="sources"> 
<<<<<<< HEAD
                <div>Become An Active Learner</div>
                <div>Start Your Own Cause</div>
=======
                <div>
                  <SocialIcon network="twitter" url='https://twitter.com/?lang=en'/>
                  <SocialIcon network="facebook" url='https://facebook.com'/>
                </div>
>>>>>>> 8e2e32c8eb92b394fecb125738a0d168ccf3ddd0
              </div>
          </section>
        </main>


      </header>
    </div>
  );
}

export default App_Educating_Resources;
