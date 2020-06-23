import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Experience from "./component/Experience/Experience";
import Section2 from "./component/Section2/Section2";
import styled from "styled-components";
import NavBar from "./component/NavBar/NavBar";
import Description from "./component/Description/Description";
import Portfolio from "./component/Portfolios/index";
import Education from "./component/Education/Education";
import { Button } from "semantic-ui-react";

function App() {
  const [addClass, setAddClass] = React.useState("");
  const [exp, setExp] = React.useState({
    exp: true,
    edu: false,
  });
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
          <div className='App' id='home'>
            <Div></Div>
            <NavBar addClass={addClass} />
            <Description />
            <Section2 />
            <EduExp>
              <div className='exp'>
                <Button
                  onClick={() => setExp({ exp: true })}
                  style={exp.exp ? { background: "teal", color: "#fff" } : {}}
                >
                  Experience
                </Button>
                <Button
                  onClick={() => setExp({ edu: true })}
                  style={exp.edu ? { background: "teal", color: "#fff" } : {}}
                >
                  Education
                </Button>
              </div>
              {exp.exp && <Experience />}
              {exp.edu && <Education />}
            </EduExp>
            <Portfolio />
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
const EduExp = styled.div`
  width: 100%;
  min-height: 60vh;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );

  .exp {
    display: flex;
    justify-content: center;
    padding-top: 2%;

    button {
      margin: 0 1em;
      padding: 1.5em 4em;
      transition: all 0.5s ease-in-out;
      background: rgb(238, 174, 202);
      background: radial-gradient(
        left,
        rgba(238, 174, 202, 1) 0%,
        rgba(148, 187, 233, 1) 100%
      );
      color: #ffffff;

      &:hover {
        background: teal;
        color: #ffffff;
      }
    }
  }
`;

export default App;
