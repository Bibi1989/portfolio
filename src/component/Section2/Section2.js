import React from "react";
import styled from "styled-components";
import About from "../About/About";
import Skill from "../Skill/Skill";

const welcome = "../../../fixed.jpg";

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
  grid-gap: 5%5ch;
  /* background: url(${welcome});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 82%;
  background-attachment: fixed; */
`;

export default Section2;
