import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Header from "./components/Layout/Header";
import ProductList from "./components/Products/ProductList";




function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
    <>
    <Header/>
    <ProductList/>
    </>
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
