import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import App_virtual_page from "./virtual-page/App_virtual_page";
import ImageGallery from "./vr";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="./vr"> </Route>  
            <Link to="./vr"><ImageGallery /></Link>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
