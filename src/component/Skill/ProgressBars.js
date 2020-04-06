import React from "react";
import { Progress, ProgressGray, ProgressColor } from "./SkillStyle";

const ProgressBars = ({ width }) => {
  return (
    <Progress>
      <ProgressGray>
        <ProgressColor width={width} data-aos='fade-right' />
      </ProgressGray>
    </Progress>
  );
};

export default ProgressBars;
