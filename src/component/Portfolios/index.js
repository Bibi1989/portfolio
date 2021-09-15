import React from "react";
import styled from "styled-components";
import Card from "./Card";

import {} from "./style";

import { liveProjects, images } from "./datas";

const Portfolio = () => {
  return (
    <Container id="portfolio">
      <H1>Work Projects</H1>
      <Row>
        {liveProjects.map((image) => (
          <Card image={image} />
        ))}
      </Row>
      <H1>Freelance Projects</H1>
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
  padding: 3% 5%;
  max-width: 1440px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 2% 16px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
