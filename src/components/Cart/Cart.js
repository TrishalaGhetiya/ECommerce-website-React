import React, { useContext } from "react";
import { Button, Offcanvas, Table } from "react-bootstrap";

import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount;

  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            imageUrl={item.imageUrl}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        ))}
      </tbody>
    </Table>
  );
  return (
    <>
      <Offcanvas onHide={props.onClose} placement="end" {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems}
          <div className="float-end">
            <span>Total : {totalAmount}</span>
          </div>
          {hasItems && <Button>PURCHASE</Button>}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
