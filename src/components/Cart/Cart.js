import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import Modal from "../UI/Modal";
import classes from './Cart.module.css';
import CartItem from "./CartItem";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = (props) => {
  const cartItems = (<ul className={classes["cart-items"]}>
      {cartElements.map((item) => (
        <CartItem
          title={item.title}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.actions}>
        <button className={classes["classes--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
