import React, { useContext, useEffect, useState } from "react";
import { Button, Offcanvas, Table } from "react-bootstrap";

import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import AuthContext from "../../store/auth-context";

const Cart = (props) => {
  const [myData, setData] = useState([]);
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

  useEffect(() => {
    if (email !== null) {
      const updatedEmail = email.replace(/[^A-Za-z0-9]/g, "");
      fetch(
        `https://crudcrud.com/api/c89236bf619241d2a088d79da69a7ca0/cart${updatedEmail}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          for(let i=0;i<data.length;i++){
            cartCtx.addItem({
              id: data[i].id,
              title: data[i].title,
              price: data[i].price,
              quantity: data[i].quantity,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [email]);

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
        {myData.map((item) => (
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
