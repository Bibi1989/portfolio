import React from "react";
import { Div, DateTime, Divide, Work, Container } from "./ExperienceStyle";

const Experience = () => {
  return (
    <Container>
      <Div>
        <DateTime>
          <p>March 2019 to present</p>
          <p>March 2019 to present</p>
          <p>March 2019 to present</p>
          <p>March 2019 to present</p>
        </DateTime>
        <Divide>
          <div className='line'></div>
        </Divide>
        <Work>
          <p>
            <span>Fichaya Lifestyle Technology Limited</span>
            <span>Frontend Software Engineer</span>
          </p>
          <p>
            <span>Decagon Learning Institute.</span>
            <span>Software Engineer</span>
            <span>
              Responsible for building web application from client to server
              side using technology like javascript, react, node/express,
              restful api, graphql, postgresql, mongoDB
            </span>
          </p>
          <p>
            <span>Decagon Learning Institute.</span>
          </p>
          <p>
            <span>Decagon Learning Institute.</span>
          </p>
        </Work>
      </Div>
    </Container>
  );
};

export default Experience;
