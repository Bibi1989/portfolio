import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Landing from "./component/Landing/Landing";
import Experience from "./component/Experience/Experience";
import Section2 from "./component/Section2/Section2";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className='App'>
            <Landing />
            <Section2 />
            <Experience />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
