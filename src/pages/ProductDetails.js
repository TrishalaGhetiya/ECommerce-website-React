import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

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
  const params = useParams();

  const product = productsArr.find(
    (product) => product.id === params.ProductId
  );

  return (
    <>
    <Container>
      <Row className="p-3">
        <Col><Image src={product.imageUrl} rounded /></Col>
        <Col><h1>{product.title}</h1></Col>
      </Row>
      </Container>
    </>
  );
};

export default ProductDetails;
