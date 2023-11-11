import React from "react";

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
  const productList = productsArr.map((product) => (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
      </div>
      <img src={product.imageUrl} alt="A Product" width="100px" />
      <div>
        {product.price}
        <button>Add To Cart</button>
      </div>
    </div>
  ));
  return (
    <div>
      <ul>{productList}</ul>
    </div>
  );
};

export default ProductList;
