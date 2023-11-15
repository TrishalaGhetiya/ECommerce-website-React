import React, { useState } from "react";

import Header from "../components/Layout/Header";
import ProductList from "../components/Products/ProductList";
import Cart from "../components/Cart/Cart";
import CartProvider from "../store/cartProvider";

const Store = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <main>
        <ProductList />
      </main>
      <Cart show={cartIsShown} onHide={hideCartHandler} />
    </CartProvider>
  );
};

export default Store;
