import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  h1 {
    font-size: 3em;
    padding-bottom: 1em;
  }
`;
export const H2 = styled.h2`
  color: #555;
  font-size: 1em;
  margin: 0;
`;
export const Div = styled.h2`
  display: flex;
`;
export const Progress = styled.div`
  width: 100%;
  border: 0.5px solid #aaa;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  height: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8em;

  :nth-child(2) {
    margin-top: 0;
  }
`;
export const ProgressGray = styled.div`
  width: 99%;
  background: #e8e8e8;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  height: 60%;
`;
export const ProgressColor = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  height: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;
