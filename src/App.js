import React, { useState } from "react";
import Header from "./components/Layout/Header";
import ProductList from "./components/Products/ProductList";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/cartProvider";

function App() {
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
    // <CartProvider>
    //   {cartIsShown && <Cart onClose={hideCartHandler} />}
    //   <Header onShowCart={showCartHandler} />
    //   <main>
    //     <ProductList />
    //   </main>
    //   <Footer />
    // </CartProvider>
  );
}

export default App;
