import React, {useState} from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Home from "./pages/Home.js"
import DemoPage from "./pages/DemoPage.js"
import SignUp from "./pages/SignUp.js"
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import { CgDarkMode } from "react-icons/cg";


const App = () => {
const [darkMode, setDarkMode] = useState(false)
  return (
    <>
    <CgDarkMode id="modeToggle" onClick={() => setDarkMode(darkMode => !darkMode)} className="Icon-DarkMode" />
    <div className={darkMode ? "dark-mode App" : "App" }>
    <Router>
    <Header/>
     <Switch>
      <Route path="/demo" component={DemoPage}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/" exact component={Home}/>
     </Switch>
    </Router>
    <Footer />
    </div>
    </>
  );
};

export default App;

// 
