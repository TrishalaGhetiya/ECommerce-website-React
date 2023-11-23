import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const productsArr = [
  {
    id: 'p1',
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: 'p2',
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: 'p3',
    title: "Yellow & Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: 'p4',
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductList = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const email = authCtx.email;
  const updatedEmail = email.replace(/[^A-Za-z0-9]/g, '');

  const addToCartHandler = (product) => {
    fetch(`https://crudcrud.com/api/6ea0f3c4bea64cca96ce45a0c4681632/cart${updatedEmail}`, {
      method: 'POST',
      body: JSON.stringify({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
        res.json();
    }).then(data => {
      console.log(data);
    })
    cartCtx.addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1
    });
  };

  return (
    <>
    <Container>
      <Row>
        {productsArr &&
          productsArr.map((product) => {
            const { title, price, imageUrl } = product;
            return (
              <Col className="col-6">
                <Card style={{ width: "15rem" }} className="m-auto border-0">
                  <Card.Body>
                    <Card.Title className="text-center">{title}</Card.Title>
                  </Card.Body>
                  <NavLink to={`/Store/${product.id}`}><Card.Img variant="top" src={imageUrl} /></NavLink>
                  <Card.Footer>
                    <p>
                      {price}
                      <Button
                        onClick={() => addToCartHandler(product)}
                        variant="primary"
                        className="float-end"
                      >
                        Add To Cart
                      </Button>
                    </p>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
      </Row>
      </Container>
    </>
  );
};

export default ProductList;
