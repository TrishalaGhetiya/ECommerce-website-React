import React, { useContext, useState } from "react";
import { Container, Navbar, Nav, Button, Badge } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import AuthContext from "../../store/auth-context";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Header = (props) => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const [cartIsShown, setCartIsShown] = useState(false);

  const logoutHandler = () => {
    authCtx.logout();
    localStorage.removeItem('token');
    history.push('/Login');
  }

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
            {authCtx.isLoggedIn && <Nav.Link href="/Store">Store</Nav.Link>}
            <Nav.Link href="/AboutUs">About</Nav.Link>
            <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
            {!authCtx.isLoggedIn && <Nav.Link href="/Login">Login</Nav.Link>}
          </Nav>
        </Container>
        {authCtx.isLoggedIn && <Button onClick={logoutHandler}>Logout</Button>}
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
