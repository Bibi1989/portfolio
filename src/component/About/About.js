import React from "react";
import { Container, H1, P, TotalProject } from "./AboutStyle";
import { Icon } from "semantic-ui-react";

const About = () => {
  return (
    <Container>
      <H1 data-aos='fade-right'>Personal Objectives</H1>
      <P data-aos='fade-right'>
        I am a full stack software engineer,I am proficient in html, css,
        css3, react.js, react native, vuejs, javascript, typescript, node/express.js, mongoDB,
        postgresql, restful api and graphql. I have done some
        web applications for decagon learning institute, fichaya, dysh and client, with technology like, react, react native, vuejs, node and mongoose/postgresql. and some personal
        applications.
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
