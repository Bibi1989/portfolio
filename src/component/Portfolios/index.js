import React from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";

const images = [
  {
    pic: "./images/productmanagement.png",
    content: "https://b-manager.netlify.app",
    name: "B Manager",
  },
  {
    pic: "./images/blog.png",
    content: "https://bibiblog.netlify.app/",
    name: "Bibi Ask",
  },
  {
    pic: "./images/erefashion.png",
    content: "https://ereshopify.netlify.app/",
    name: "Ere Place",
  },
  {
    pic: "./images/music.png",
    content: "https://musicapps.netlify.app/",
    name: "Music App",
  },
];

const Portfolio = () => {
  return (
    <Container>
      <H1>My PortFolios</H1>
      <Row>
        {images.map((image) => (
          <Col>
            <Image>
              <img src={image.pic} alt='product management' />
              <Content>
                <Button as='a' href={image.content}>
                  {image.name}
                </Button>
              </Content>
            </Image>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;

export const Container = styled.div`
  padding: 3% 10%;
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

  &:hover ${Content} {
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
