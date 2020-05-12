import React, { useState } from "react";
import {
  FormContainer,
  Container,
  H2,
  Form,
  FormDiv,
  Label,
  Input,
  Button,
} from "./ContactStyle";
import { TextArea } from "semantic-ui-react";
import axios from "axios";

const Contact = () => {
  const [messages, setMessages] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleMessage = ({ target: { name, value } }) => {
    setMessages({
      ...messages,
      [name]: value,
    });
  };
  const sendMail = async () => {
    try {
      const response = await axios.post(`http://localhost:3010`, messages, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMsg(response.data.success);
      setMessages({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      // setError(error.response.error);
      console.log(error.response);
    }
  };
  const onsubmit = (e) => {
    e.preventDefault();
    sendMail();
  };
  return (
    <Container data-aos='flip-right'>
      <FormContainer>
        <Form onSubmit={onsubmit}>
          <H2>Write Me</H2>
          <p>{msg}</p>
          <FormDiv>
            <Input
              type='text'
              placeholder='Names...'
              name='name'
              onChange={handleMessage}
            />
          </FormDiv>
          <FormDiv>
            <Input
              type='email'
              placeholder='Email Address'
              name='email'
              onChange={handleMessage}
            />
          </FormDiv>
          <FormDiv>
            <TextArea
              name='message'
              placeholder='Write me'
              onChange={handleMessage}
            />
          </FormDiv>
          <Button type='submit'>Contact</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Contact;
