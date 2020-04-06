import React from "react";
import {
  Container,
  H1,
  DateTime,
  Divide,
  Work,
  Div,
} from "../Experience/ExperienceStyle";

const Education = () => {
  return (
    <Container data-aos='zoom-in'>
      <H1>My Education</H1>
      <Div>
        <DateTime justify='space-evenly'>
          <p>October 2006 to September 2011</p>
          <p>October 2000 to May 2006</p>
        </DateTime>
        <Divide justify='space-evenly'>
          <div className='line'>
            <span></span>
            <span></span>
          </div>
        </Divide>
        <Work justify='space-evenly'>
          <p>
            <span>Niger Delta University, Amassoma</span>
            <span>Bayelsa State</span>
            <span>B.Eng Mechanical EngineeringOCTOBER</span>
          </p>
          <p>
            <span>Federal Government College, Odi</span>
            <span>Bayelsa State</span>
            <span>West Africa Examination Council (WAEC)</span>
          </p>
        </Work>
      </Div>
    </Container>
  );
};

export default Education;
