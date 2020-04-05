import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Landing from "./component/Landing/Landing";
import Experience from "./component/Experience/Experience";
import Section2 from "./component/Section2/Section2";
import styled from "styled-components";
import NavBar from "./component/NavBar/NavBar";
import Description from "./component/Description/Description";

function App() {
  const [addClass, setAddClass] = React.useState("");
  const [show, setShow] = React.useState("");
  // const intersection = useIntersection(refList, {
  //   root: null,
  //   rootMargin: "50px",
  //   threshold: 1,
  // });

  // if (intersection && intersection.intersectionRatio < 0.2) {
  //   refList.current.className = "nav-dark";
  // }
  // console.log(intersection);
  React.useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY < 120) {
        setAddClass("");
      } else {
        setAddClass("nav-dark");
      }
    };
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className='App'>
            <Div></Div>
            <NavBar addClass={addClass} />
            <Description />
            <Section2 />
            <Experience />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

const Div = styled.div`
  width: 100%;
  max-height: 100vh;
  min-height: 100vh;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  position: relative;
`;

export default App;
