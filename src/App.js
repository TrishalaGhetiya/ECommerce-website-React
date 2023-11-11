import React, { useState } from "react";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import ProductList from "./components/Products/ProductList";
import Cart from "./components/Cart/Cart";



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
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <ProductList />
      </main>
      <Footer />
    </>
  );
}

export default App;
