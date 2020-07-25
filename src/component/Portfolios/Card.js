import React, { useState } from "react";
import { Button, Icon, Accordion } from "semantic-ui-react";
import styled from "styled-components";

const Card = ({ image }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };
  return (
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
        <Accordion>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={handleClick}
          >
            <Icon name='dropdown' />
            Click to see tools
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <ul>
              {image.tools.map((tool) => (
                <li>{tool}</li>
              ))}
            </ul>
          </Accordion.Content>
        </Accordion>
      </Content>
    </Col>
  );
};

export default Card;

export const Content = styled.div`
  padding: 1em;

  ul {
    /* padding-left: 3em; */
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    h4 {
      padding-bottom: 1em;
    }

    li {
      padding-right: 1em;
    }
  }

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
