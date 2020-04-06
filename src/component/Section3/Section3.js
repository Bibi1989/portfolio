import React from "react";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import { Route } from "react-router-dom";

const Section3 = () => {
  return (
    <div>
      <Route exact path='/experience'>
        <Experience />
      </Route>
      <Route exact path='/education'>
        <Education />
      </Route>
    </div>
  );
};

export default Section3;
