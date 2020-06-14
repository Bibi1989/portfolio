import styled from "styled-components";

export const Container = styled.div`
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  padding: 1.5em;
`;

export const H1 = styled.h1`
  text-align: center;
  color: #d4e0ff;
  font-size: 2.7em;
  font-weight: 700;
  mix-blend-mode: screen;
`;
export const DateTime = styled.div`
  width: 100%;
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: ${(props) =>
    props.justify ? props.justify : "space-between"};
  padding: 18% 0;
  /* background: black; */

  p {
    color: #d4e0ff;
    font-size: 1.3em;
    font-weight: 700;
    margin: 0 !important;
    mix-blend-mode: screen;
  }
`;
export const Divide = styled.div`
  width: 100%;
  /* background: red; */
  display: flex;
  justify-content: center;
  align-items: center;

  .line {
    height: 80%;
    width: 0.6em;
    color: blue;
    background: whitesmoke;
    opacity: 0.5;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${(props) =>
      props.justify ? props.justify : "space-between"};
    padding: 32% 0;

    span {
      width: 20px;
      height: 20px;
      background: whitesmoke;
      border: 0.25em solid rgba(0, 255, 0, 0.5);
      border-radius: 50%;
    }
  }
`;
export const Work = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: ${(props) =>
    props.justify ? props.justify : "space-between"};
  padding: 17.5% 10% 8% 0;
  /* background: black; */

  p {
    display: flex;
    flex-direction: column;

    span:nth-child(1) {
      color: #f8f6ff;
      font-size: 1.7em;
      font-weight: 700;
      mix-blend-mode: screen;
    }
    span:nth-child(2) {
      color: #f8f6ff;
      mix-blend-mode: screen;
      padding-top: 0.6em;
    }
    span:nth-child(3) {
      color: #f8f6ff;
      mix-blend-mode: screen;
      padding-top: 0.6em;
    }
  }
`;

export const Div = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 45% 10% 45%;
  height: 100vh;

  @media (max-width: 769px) {
    grid-template-columns: 1fr;

    ${DateTime} {
      display: none;
    }
    ${Divide} {
      display: none;
    }
  }
`;
