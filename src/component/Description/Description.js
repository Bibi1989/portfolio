import React from "react";
import {
  Container,
  Image,
  Details,
  P1,
  P2,
  H1,
  H3,
  DetailList,
  List,
  Span,
  Icons,
} from "./DescriptionStyle";
import { Icon } from "semantic-ui-react";

const pic = "../../../landing.jpg";

const Description = () => {
  return (
    <Container data-aos='zoom-in'>
      <Image>{/* <img src={pic} alt='My Picture' /> */}</Image>
      <Details>
        <P1>Hi, I am</P1>
        <H1>aremieye bibirinbulu</H1>
        <H3>fullstack software engineer</H3>
        <P2>
          I am a full stack software engineer,I am proficient in html, css,
          css3, react.js, javascript, typescript, node/express.js, mongoDB,
          postgresql, restful api, docker, CI/CD and graphql.I have done some
          web applications for decagon learning institute, with technology like
          python, react, node and mongoose/postgresql. and some E- commerce web
          applications.
        </P2>
        <DetailList>
          <List>
            <Icon name='phone' size='large' />
            <Span>+2348165025176</Span>
          </List>
          <List>
            <Icon name='envelope' size='large' />
            <Span>bibiaremieye@gmail.com</Span>
          </List>
          <List>
            <Icon name='address book' size='large' />
            <Span>
              18 Ijeoma Odika Street, Atlantic View Estate, Lagos State
            </Span>
          </List>
        </DetailList>
        <Icons>
          <a
            className='link'
            href='https://www.linkedin.com/in/bibirinbulu-aremieye-983831175/'
          >
            <Icon name='linkedin' size='big' color='blue' />
          </a>
          <a className='link' href='#'>
            <Icon name='twitter' size='big' color='blue' />
          </a>
          <a className='link' href='#'>
            <Icon name='github' size='big' color='black' />
          </a>
        </Icons>
      </Details>
    </Container>
  );
};

export default Description;
