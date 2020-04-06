import React from "react";
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

const Contact = () => {
  return (
    <Container data-aos='flip-right'>
      <FormContainer>
        <Form onSubmit={onsubmit}>
          <H2>Write Me</H2>
          <FormDiv>
            {/* <Label>Name</Label> */}
            <Input type='text' placeholder='Firstname' name='firstname' />
          </FormDiv>
          {/* <FormDiv>
            <Label>Lastname</Label>
            <Input type='text' placeholder='Lastname' name='lastname' />
          </FormDiv> */}
          <FormDiv>
            {/* <Label>Email Address</Label> */}
            <Input type='email' placeholder='Email Address' name='email' />
          </FormDiv>
          <FormDiv>
            {/* <Label>Write</Label> */}
            {/* <Input type='password' placeholder='Password' name='password' /> */}
            <TextArea placeholder='Write me' />
          </FormDiv>
          <Button type='submit'>Contact</Button>
        </Form>
        {/* <SideComponent register='' text='Login' /> */}
      </FormContainer>
    </Container>
  );
};

export default Contact;
