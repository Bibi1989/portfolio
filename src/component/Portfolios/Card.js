import React, { useState } from "react";
import { Button, Icon, Accordion } from "semantic-ui-react";

import { Col, Image, Overlay, Content } from "./style";

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
            {activeIndex !== 0 ? "Click to see tools" : "Click to hide tools"}
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
