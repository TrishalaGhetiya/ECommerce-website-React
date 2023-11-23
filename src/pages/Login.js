import React, { useContext, useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import AuthContext from "../store/auth-context";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const enteredEmailInput = emailInputRef.current.value;
    const enteredPasswordInput = passwordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBaMjEyYa1-VQ3dRX6GfB9u_vd7uM8God4",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmailInput,
          password: enteredPasswordInput,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken, data.email);
        history.replace("/Store");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <>
      <Container>
        <Form onSubmit={formSubmitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailInputRef} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordInputRef} />
          </Form.Group>
          <Button className="float-end" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
