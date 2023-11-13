import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductList = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (product) => {
    cartCtx.addItem({
      title: product.title,
      price: product.price,
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
                  <Card.Img variant="top" src={imageUrl} />
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
