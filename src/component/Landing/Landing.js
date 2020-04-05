import React from "react";
import { Container } from "./LandingStyle";
import NavBar from "../NavBar/NavBar";
import Description from "../Description/Description";

const Landing = () => {
  return (
    <Container>
      {/* <NavBar addClass={addClass} /> */}
      <Description />
    </Container>
  );
};

export default Landing;
