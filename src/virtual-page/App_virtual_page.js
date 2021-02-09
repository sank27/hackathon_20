import './App_virtual_page.css'
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import App_virtual_page from "./virtual-page/App_virtual_page";
import ImageGallery from "./vr";

function App_virtual_page() {
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

export default App_virtual_page;