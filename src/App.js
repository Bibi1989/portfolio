import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Landing from "./component/Landing/Landing";
import Experience from "./component/Experience/Experience";
import Section2 from "./component/Section2/Section2";

function App() {
  const [addClass, setAddClass] = React.useState(false);
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
      if (window.scrollY > 128) {
        setAddClass(true);
      } else {
        setAddClass(false);
      }
      console.log(window.scrollY);
    };
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className='App'>
            <Landing addClass={addClass} />
            <Section2 />
            <Experience />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
