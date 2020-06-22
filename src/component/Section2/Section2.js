import React from "react";
import styled from "styled-components";
import About from "../About/About";
import Skill from "../Skill/Skill";

const Section2 = () => {
  return (
    <div id='skill'>
      <Container>
        <About />
        <Skill />
      </Container>
    </div>
  );
};

const Container = styled.div`
  padding: 32vh 0 5% 0;
  max-width: 90em;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2em;

  @media (max-width: 769px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 1em;
  }
`;

export default Section2;
