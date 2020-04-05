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
  padding: 30vh 10% 5% 10%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5%5ch;
`;

export default Section2;
