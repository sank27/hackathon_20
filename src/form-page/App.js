import './App.css';
import React, {useEffect, useState} from 'react'
import { PieChart } from 'react-minimal-pie-chart'

function App() {

  // const [state, setState] = useState({value1: 1, value2: 2, value3: 3})

  // const calcInput = (e) => {
  //   console.log(e.target)
  //   console.log('jello')
  // }

  return (
    <div className="App-container">

      <form action="">
        <div id='flex'>
        <label htmlFor="ename"> What is your average electricity per month? </label>
        <input type="text" id="ename"></input>
        
        <label htmlFor="ename"> What is your average natural gas bill per month?</label>
        <input type="text" id="ename" ></input>
        <label htmlFor="ename">To determine your waste emission please enter how many people live in your household: </label>
        <input type="text" id="ename" ></input>
        <div className="button-class">
        <button >Submit</button>
        </div>
        </div>
      </form>

      <div className="pie-chart">
      <PieChart paddingAngle= {1} style= {{height: '450px', width: '450px'}} 
      data = {[
             { title: 'One', value: 15, color: '#E38627'},
             { title: 'Two', value: 25, color: '#C13C37' },
             { title: 'Three', value: 35, color: '#6A2135' },
        ]}
        label= {({ dataEntry }) => dataEntry.value}
        labelStyle={(index) => ({
          fontSize: '9px',
          fontFamily: 'Roboto'
        })}
        />
        </div>
    </div>
  );
}

export default App;
