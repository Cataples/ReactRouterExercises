import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Test from "./components/test";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Error from "./components/error";
import NavBar from "./components/navigation";
import Username from "./components/username";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/user/:username" component={Username} />
            <Route path="/test" component={Test} />
            <Route exact path="/" component={Home} />
            <Route path="/about/" strict component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} exact />
            {/* <Redirect from="/redirect" to="/contact" /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
