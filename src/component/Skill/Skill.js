import React from "react";
import { Container, H2 } from "./SkillStyle";
import ProgressBars from "./ProgressBars";

const Skill = () => {
  return (
    <Container>
      <h1>Skills</h1>
      <>
        <H2>HTML 95%</H2>
        <ProgressBars width='95%' />
        <H2>CSS/STYLED-COMPONENTS 90%</H2>
        <ProgressBars width='90%' />
        <H2>JAVASCRIPT 90%</H2>
        <ProgressBars width='90%' />
        <H2>TYPESCRIPT 85%</H2>
        <ProgressBars width='85%' />
        <H2>REACTJS/REDUX 95%</H2>
        <ProgressBars width='95%' />
        <H2>REACT NATIVE 65%</H2>
        <ProgressBars width='65%' />
        <H2>VUE 75%</H2>
        <ProgressBars width='75%' />
        <H2>NODE/EXPRESS 90%</H2>
        <ProgressBars width='90%' />
        <H2>MONGODB 85%</H2>
        <ProgressBars width='85%' />
        <H2>POSTGRESQL 85%</H2>
        <ProgressBars width='85%' />
        <H2>GRAPHQL 75%</H2>
        <ProgressBars width='75%' />
      </>
    </Container>
  );
};

export default Skill;
