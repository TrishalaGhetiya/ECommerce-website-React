import React, { useContext } from "react";
import { Button, Offcanvas, Table } from "react-bootstrap";

import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import AuthContext from "../../store/auth-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const email = authCtx.email;
  
  

  const totalAmount = cartCtx.totalAmount;

  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  let cartItemsToShow = '';
  if(email !== null){
    const updatedEmail = email.replace(/[^A-Za-z0-9]/g, '');
    fetch(`https://crudcrud.com/api/6ea0f3c4bea64cca96ce45a0c4681632/cart${updatedEmail}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      cartItemsToShow = 
      data.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          imageUrl={item.imageUrl}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))
    })
    .catch(err => {
      console.log(err);
    })
  }
  

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
        {cartItemsToShow}
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
