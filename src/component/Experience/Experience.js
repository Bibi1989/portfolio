import React from "react";
import { Div, DateTime, Divide, Work, Container, H1 } from "./ExperienceStyle";

const Experience = () => {
  return (
    <Container data-aos="zoom-in" id="experience">
      <H1>My Tech Experience</H1>
      <Div>
        <DateTime>
          <p data-aos="fade-left">August 2020 to July 2021</p>
          <p data-aos="fade-left">March 2019 to August 2019</p>
          <p data-aos="fade-left">October 2019 to present</p>
          <p data-aos="fade-left">Feb 2018 to present</p>
        </DateTime>
        <Divide>
          <div className="line">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Divide>
        <Work>
          <p data-aos="fade-right">
            <span>Divergent(DYSH) (Contract)</span>
            <span>Full Stack Engineer</span>
            <span>
              Responsible for building web/mobile application and consuming
              backend apis, using technology like typescript, graphql, hasura,
              nextjs, react, react-native, node/express, etc...
            </span>
          </p>
          <p data-aos="fade-right">
            <span>Fichaya Lifestyle Technology Limited (Contract)</span>
            <span>Frontend Software Engineer</span>
            <span>
              Responsible for building web application and consuming backend
              apis, using technology like javascript, react, styled-components,
              etc...
            </span>
          </p>
          <p data-aos="fade-right">
            <span>Decagon Learning Institute. (Indeed)</span>
            <span>Software Engineer</span>
            <span>
              Responsible for building web application from client to server
              side using technology like javascript, react, node/express,
              restful api, graphql, postgresql, mongoDB
            </span>
          </p>
          <p data-aos="fade-right">
            <span>Freelance & Personal Projects</span>
            <span>Software Engineer</span>
            <span>
              Responsible for building web application from client to server
              side using technology like javascript, react, node/express,
              restful api, graphql, postgresql, mongoDB
            </span>
          </p>
        </Work>
      </Div>
    </Container>
  );
};

export default Experience;
