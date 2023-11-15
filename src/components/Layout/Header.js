import React, { useContext } from "react";
import { Container, Navbar, Nav, Button, Badge } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.quantity;
  }, 0);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>;
            <Nav.Link href="/">Store</Nav.Link>
            <Nav.Link href="/AboutUs">About</Nav.Link>
          </Nav>
        </Container>
        <Button onClick={props.onShowCart}>
          Cart{" "}
          <Badge pill bg="light" text="dark" position="top-right">
            {numberOfCartItems}
          </Badge>
        </Button>
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
