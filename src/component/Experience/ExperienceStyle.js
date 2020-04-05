import styled from "styled-components";

export const Container = styled.div`
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
`;
export const Div = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 45% 10% 45%;
  height: 80vh;
`;
export const DateTime = styled.div`
  width: 100%;
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 15% 0;
  /* background: black; */

  p {
    color: #d4e0ff;
    font-size: 1.3em;
    font-weight: 700;
    mix-blend-mode: screen;
    position: relative;
    ::after {
      content: "";
      position: absolute;
      top: 5%;
      right: -49%;
      width: 20px;
      height: 20px;
      border: 4px solid #d4e0ff;
      border-radius: 50%;
      background: whitesmoke;
    }
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
    opacity: 0.8;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }
`;
export const Work = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 15% 10% 15% 0;
  /* background: black; */

  p {
    display: flex;
    flex-direction: column;

    span:nth-child(1) {
      color: #d4e0ff;
      font-size: 1.7em;
      font-weight: 700;
      mix-blend-mode: screen;
    }
    span:nth-child(2) {
      color: #d4e0ff;
      mix-blend-mode: screen;
      padding-top: 0.7em;
    }
    span:nth-child(3) {
      color: #d4e0ff;
      mix-blend-mode: screen;
      padding-top: 0.7em;
    }
  }
`;
