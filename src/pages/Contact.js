import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Contact = () => {
  const enteredNameInput = useRef();
  const enteredEmailInput = useRef();
  const enteredPhNumberInput = useRef();

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const user = {
      name: enteredNameInput.current.value,
      email: enteredEmailInput.current.value,
      phNumber: enteredPhNumberInput.current.value,
    };

    const response = await fetch(
      "https://react-http-ff156-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  return (
    <>
      <Container>
        <Form onSubmit={formSubmitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="John Doe"
              ref={enteredNameInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="johndoe@gmail.com"
              ref={enteredEmailInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" ref={enteredPhNumberInput} />
          </Form.Group>
          <Button className="float-end" type="submit">
            Submitt
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Contact;
