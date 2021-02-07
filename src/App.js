import './App.css';
import { PieChart } from 'react-minimal-pie-chart'

function App() {
  return (
    <div className="App">

      <form action="">
        <div id='flex'>
        <label for="ename"> What is your average electricity per month? </label>
        <input type="text" id="ename"></input>
        
        <label for="ename"> What is your average natural gas bill per month?</label>
        <input type="text" id="ename"></input>
        <label for="ename">To determine your waste emission please enter how man people live in your household: </label>
        <input type="text" id="ename"></input>
        </div>
      </form>

      <PieChart  data = {[
             { title: 'One', value: 10, color: '#E38627' },
             { title: 'Two', value: 15, color: '#C13C37' },
             { title: 'Three', value: 20, color: '#6A2135' },
        ]} />

    </div>
  );
}

export default App;
