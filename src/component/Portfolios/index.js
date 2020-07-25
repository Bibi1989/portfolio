import React from "react";
import styled from "styled-components";
import { Button, Icon } from "semantic-ui-react";
import Card from "./Card";

const liveProjects = [
  {
    pic: "./images/fichaya.png",
    content: "https:/fichaya.com",
    name: "Fichaya",
  },
];

const images = [
  {
    pic: "./images/productmanagement.png",
    content: "https://b-manager.netlify.app",
    name: "B Manager",
    tools: ["Reactjs/Redux", "Node/Express", "Postgresql", "Sequelize ORM"],
  },
  {
    pic: "./images/blog.png",
    content: "https://bibiblog.netlify.app/",
    name: "Bibi Ask",
    tools: ["Reactjs/Redux", "Node/Express", "Postgresql", "Sequelize ORM"],
  },
  {
    pic: "./images/erefashion.png",
    content: "https://ereshopify.netlify.app/",
    name: "Ere Place",
    tools: ["Reactjs/Redux", "Node/Express", "Postgresql", "Sequelize ORM"],
  },
  {
    pic: "./images/music.png",
    content: "https://musicapps.netlify.app/",
    name: "Music App",
    tools: ["Reactjs/Redux", "Styled-components"],
  },
  {
    pic: "./images/gigfinder.png",
    content: "https://youcanhireme.netlify.app/home",
    name: "You Can Hire A Dev",
    tools: ["Reactjs", "Node/Express", "Postgresql", "Sequelize ORM"],
  },
  {
    pic: "./images/petshopify.png",
    content: "https://petshopify.netlify.app/",
    name: "Shop Pets",
    tools: ["Reactjs/Redux", "Node/Express", "Postgresql", "@Databases/pg ORM"],
  },
  {
    pic: "./images/blog.png",
    content: "https://yourjobs.herokuapp.com/#/",
    name: "Github Jobs",
    tools: ["Vuejs"],
  },
];

const Portfolio = () => {
  return (
    <Container id='portfolio'>
      <H1>Live Projects</H1>
      <Row>
        {liveProjects.map((image) => (
          <Col key={image.name}>
            <Image>
              <img src={image.pic} alt='product management' />
              <Overlay>
                <Button as='a' href={image.content} target='blank'>
                  {image.name}
                </Button>
              </Overlay>
            </Image>
            <Content>
              <p className='title'>Name: {image.name}</p>
              <p>
                <a href={image.content} target='blank'>
                  <Icon name='linkify' /> Visit
                </a>
              </p>
            </Content>
          </Col>
        ))}
      </Row>
      <H1>Personal Projects</H1>
      <Row>
        {images.map((image) => (
          <Card image={image} />
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;

export const Container = styled.div`
  padding: 3% 10%;

  @media (max-width: 769px) {
    padding: 3% 10px;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;

  @media (max-width: 769px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  padding: 1em;

  a {
    display: block;
    padding: 0.6em 2em;
    background: orangered;
    text-align: center;
    border-radius: 0.3em;
    color: white;
    font-size: 1.3em;
  }

  .title {
    color: teal;
    text-align: center;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;
`;
export const Col = styled.div`
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  border-radius: 0.3em;
  overflow: hidden;

  &:hover ${Overlay} {
    opacity: 1;
    pointer-events: visible;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  padding-bottom: 2em;
  padding-top: 1em;
  font-size: 3em;
  color: #777;
`;
