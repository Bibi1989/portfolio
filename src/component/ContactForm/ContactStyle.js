import styled from "styled-components";
// const welcome = "../../../fixed.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: ${(props) => (props.padding ? props.padding : "6em 0em")};
  display: flex;
  justify-content: center;
`;

export const FormContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(238, 174, 202);
  border-radius: 0.25em;
`;

export const Form = styled.form`
  width: 100%;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;

  textarea {
    padding: 2em 1em;
    outline: none;
    background: transparent;
    border: 0.5px solid rgb(238, 174, 202);
    border-top: 1px solid transparent;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    color: #eee;

    &::placeholder {
      color: #eee;
    }

    &:focus::placeholder {
      transform: translate(-0.5%, -100%);
      transition: all 0.5s ease-in-out;
      background: transparent;
      color: #eee;
    }
  }
`;

export const Label = styled.label`
  align-self: flex-start;
  font-size: 0.9em;
  padding-bottom: 0.4em;
  color: #eee;
  /* color: #00ad5e; */
`;

export const Input = styled.input`
  width: 100%;
  background: transparent;
  padding: 2em 0.9em 0.5em 0.9em;
  outline: none;
  border: 0.5px solid rgb(238, 174, 202);
  border-radius: 0.25em;
  border-top: 1px solid transparent;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  color: #eee;
  &::placeholder {
    color: #eee;
  }
  &.error {
    border: 1px solid red;
    border-top: 1px solid transparent;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    transition: all 0.5s ease-in-out;
  }

  &:focus::placeholder {
    transform: translate(-0.5%, -100%);
    transition: all 0.5s ease-in-out;
    background: transparent;
  }
`;

export const H2 = styled.h2`
  text-align: center;
  font-size: 2.5em;
  color: #eee;
`;

export const Button = styled.button`
  display: block;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  font-size: 1.1em;
  color: #ffffff;
  padding: 1em 0;
  outline: none;
  border: 0.5px solid rgb(238, 174, 202);
  border-radius: 0.25em;
  margin: 0.9em 0;
`;
