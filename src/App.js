import './App.css';
import { PieChart } from 'react-minimal-pie-chart'

function App() {
  return (
    <div className="App">

      <form action="">
        <div id='flex'>
        <label htmlFor="ename"> What is your average electricity per month? </label>
        <input type="text" id="ename"></input>
        
        <label htmlFor="ename"> What is your average natural gas bill per month?</label>
        <input type="text" id="ename"></input>
        <label htmlFor="ename">To determine your waste emission please enter how man people live in your household: </label>
        <input type="text" id="ename"></input>
        <button>Submit</button>
        </div>
      </form>

      <PieChart paddingAngle= {1} style= {{height: '450px', width: '450px'}} 
      data = {[
             { title: 'One', value: 25, color: '#E38627'},
             { title: 'Two', value: 15, color: '#C13C37' },
             { title: 'Three', value: 30, color: '#6A2135' },
        ]}
        label= {({ dataEntry }) => dataEntry.value}
        labelStyle={(index) => ({
          fontSize: '10px',
          fontFamily: 'sans-serif',
        })}
        />
        
    </div>
  );
}

export default App;
