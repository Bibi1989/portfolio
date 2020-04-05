import React from "react";
import { Div, DateTime, Divide, Work, Container, H1 } from "./ExperienceStyle";

const Experience = () => {
  return (
    <Container>
      <H1>My Tech Experience</H1>
      <Div>
        <DateTime>
          <p>March 2020 to present</p>
          <p>October 2019 to present</p>
          <p>March 2019 to present</p>
          <p>March 2019 to present</p>
        </DateTime>
        <Divide>
          <div className='line'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Divide>
        <Work>
          <p>
            <span>Fichaya Lifestyle Technology Limited</span>
            <span>Frontend Software Engineer</span>
            <span>
              Responsible for building web application and consuming backend
              apis, using technology like javascript, react, styled-components,
              etc...
            </span>
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
            <span>Software Engineer</span>
            <span>
              Responsible for building web application from client to server
              side using technology like javascript, react, node/express,
              restful api, graphql, postgresql, mongoDB
            </span>
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
        </Work>
      </Div>
    </Container>
  );
};

export default Experience;
