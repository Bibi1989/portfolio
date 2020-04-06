import React from "react";
import { Container, H1, P, TotalProject } from "./AboutStyle";
import { Icon } from "semantic-ui-react";

const About = () => {
  return (
    <Container>
      <H1 data-aos='fade-right'>Personal Objectives</H1>
      <P data-aos='fade-right'>
        I Am A Full Stack Software Engineer,I Am Proficient In Html, Css, Css3,
        React.Js, Javascript, Typescript, Node/Express.Js, MongoDB, Postgresql,
        Restful Api, Docker, CI/CD And Graphql.I Have Done Some Web Applications
        For Decagon Learning Institute, With Technology Like Python, React, Node
        And Mongoose/Postgresql. And Some E- Commerce Web Applications.
      </P>
      <TotalProject data-aos='fade-right'>
        <Icon name='book' />
        <h3>6</h3>
        <p>Projects</p>
      </TotalProject>
    </Container>
  );
};

export default About;
