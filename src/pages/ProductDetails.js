import React, { useContext } from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import CartContext from "../store/cart-context";

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

const ProductDetails = () => {
  const history = useHistory();
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
  const params = useParams();

  const product = productsArr.find(
    (product) => product.id === params.ProductId
  );

  const goBackToProductsPageHandler = () => {
    history.push('/Store');
  }

  return (
    <>
    <Container>
      <Row className="p-3">
        <Col><Image src={product.imageUrl} rounded /></Col>
        <Col><h1>{product.title}</h1>
        <Button onClick={goBackToProductsPageHandler}>Back</Button>
        <Button onClick={() => addToCartHandler(product)}>Add To Cart</Button>
        </Col>
      </Row>
      </Container>
    </>
  );
};

export default ProductDetails;
