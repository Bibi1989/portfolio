import React from "react";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import { Route, Switch } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Section3 = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/experience'>
          <Experience />
        </Route>
        <Route exact path='/education'>
          <Education />
        </Route>
      </Switch>
    </div>
  );
};

export default Section3;
