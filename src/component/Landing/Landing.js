import React from "react";
import { Container } from "./LandingStyle";
import NavBar from "../NavBar/NavBar";
import Description from "../Description/Description";

const Landing = () => {
  return (
    <Container>
      <NavBar />
      <Description />
    </Container>
  );
};

export default Landing;
