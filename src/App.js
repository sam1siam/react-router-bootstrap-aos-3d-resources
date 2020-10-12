import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import Home from "./pages/Home.js"
import DemoPage from "./pages/DemoPage.js"
import SignUp from "./pages/SignUp.js"
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";


const App = () => {
  return (
    <div className="App">
    <Router>
    <Header />
     <Switch>
      <Route path="/demo" component={DemoPage}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/" exact component={Home}/>
     </Switch>
    </Router>
    <Footer />
    </div>
  );
};

export default App;
