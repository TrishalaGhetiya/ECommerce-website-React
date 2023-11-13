import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>;
            <Nav.Link href="#store">Store</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Container>
        <HeaderCartButton onClick={props.onShowCart} />
      </Navbar>
      <Container
        className="p-3 text-center"
        fluid
        style={{ backgroundColor: "lightgray" }}
      >
        <h1>The Generics</h1>
      </Container>
    </>
  );
};

export default Header;
