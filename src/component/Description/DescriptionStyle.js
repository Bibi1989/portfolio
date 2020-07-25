import styled, { keyframes } from "styled-components";

const welcome = "../../../landing2.jpg";

const move = keyframes`
  0%{
    transform: translateY(0px);
  }
  50%{
    transform: translateY(50px);
  }
  100%{
    transform: translateY(0px);
  }
`;

export const Image = styled.div`
  background: url(${welcome});
  background-repeat: no-repeat;
  background-position-y: 10%;
  background-size: 82%;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
`;

export const Details = styled.div`
  padding-left: 15%;
  padding-right: 7%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 1200px) {
    padding-left: 0;
  }
`;
export const P1 = styled.p`
  color: #333;
  font-size: 1.5em;
  text-transform: capitalize;
`;
export const P2 = styled.p`
  color: #adadad;
  font-size: 1em;
  text-transform: capitalize;
`;
export const H1 = styled.h1`
  color: #333;
  font-size: 3em;
  text-transform: uppercase;

  @media (max-width: 960px) {
    font-size: 2em;
  }
`;
export const H3 = styled.h3`
  color: #333;
  text-transform: uppercase;
`;
export const DetailList = styled.h3`
  color: #333;
  list-style: none;
`;
export const List = styled.li`
  color: #777;
  display: flex;
  align-items: center;
  padding: 1em 0;
`;
export const Span = styled.span`
  padding-left: 2em;
  font-size: 1em;

  @media (max-width: 960px) {
    font-size: 12px;
  }
`;
export const Icons = styled.span`
  display: flex;
  justify-content: center;

  @media (max-width: 960px) {
    justify-content: flex-start;

    .link {
      text-transform: none;
      margin: 0;
    }
  }

  .link {
    text-transform: none;
    margin: 0 1em;
  }
`;

export const Container = styled.div`
  background: #ffffff;
  max-height: 100vh;
  min-height: 100vh;
  box-shadow: 0 0 20px #bbb;
  border-radius: 25% 1em 25% 1em;
  padding: 0 2em 0 0;
  display: grid;
  grid-template-columns: 55% 45%;
  gap: 2em;
  position: absolute;
  top: 25%;
  left: 10%;
  right: 10%;
  animation: ${move} 6s ease-in-out infinite;
  overflow: hidden;

  @media (max-width: 769px) {
    grid-template-columns: 1fr;
    gap: 1em;
    animation: none;
    top: 5%;
    left: 1em;
    right: 1em;
    padding: 0;
    max-height: 100%;
    border-radius: 1em;

    ${Image} {
      display: none;
    }
    ${Details} {
      padding-left: 1em;
      padding-right: 1em;
    }
  }
`;
