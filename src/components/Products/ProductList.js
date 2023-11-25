import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const productsArr = [
  {
    id: "p1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "p2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "p3",
    title: "Yellow & Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "p4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductList = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (product) => {
    const { id, title, price, imageUrl } = product;
    const item = { id, title, price, imageUrl, quantity: 1 };

    const existingCartItemIndex = cartCtx.items.findIndex(
      (item) => item.id === product.id
    );

    if(existingCartItemIndex !== -1) {
      return alert('Item is already present');
    }

    cartCtx.addItem(item);
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
                    <NavLink to={`/Store/${product.id}`}>
                      <Card.Img variant="top" src={imageUrl} />
                    </NavLink>
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
