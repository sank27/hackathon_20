import logo from './logo.svg';
import './App.css';
import App_virtual_page from './virtual-page/App_virtual_page'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
        <Router>
          <Link to="/App_virtual_page">Virtual page</Link>
          <Route path="/App_virtual_page" component={App_virtual_page}/>
        </Router>

        
        
      </header>
    </div>
  );
}

export default App;
