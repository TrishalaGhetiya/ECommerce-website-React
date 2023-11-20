import React, { useContext, useState } from "react";
import { Container, Navbar, Nav, Button, Badge } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";

const Header = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.quantity;
  }, 0);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav>
            <Nav.Link href="/Home">Home</Nav.Link>;
            <Nav.Link href="/Store">Store</Nav.Link>
            <Nav.Link href="/AboutUs">About</Nav.Link>
            <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
          </Nav>
        </Container>
        {props.isStorePage && <Button onClick={showCartHandler}>
          Cart{" "}
          <Badge pill bg="light" text="dark" position="top-right">
            {numberOfCartItems}
          </Badge>
        </Button>}
      </Navbar>
      <Container
        className="p-3 text-center"
        fluid
        style={{ backgroundColor: "lightgray" }}
      >
        <h1>The Generics</h1>
      </Container>
      <Cart show={cartIsShown} onHide={hideCartHandler} />
    </>
  );
};

export default Header;
