import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import Menu from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/screens/Home";
import About from "./components/screens/About";
import Work from "./components/screens/Work";
import Contact from "./components/screens/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Menu />
      </div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/Work" component={Work}></Route>
        <Route path="/Contact" component={Contact}></Route>
        {/* <Route component={DefaultScreen}></Route> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
