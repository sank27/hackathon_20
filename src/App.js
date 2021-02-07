import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App_virtual_page from "./virtual-page/App_virtual_page";
import ImageGallery from "./vr";
function App() {
  return (
    <div className="App">
      <a href = "vr">VR</a>
      <Router>
        <Route path="vr" exact component= {ImageGallery} />
      </Router>
    </div>
  );
}

export default App;
