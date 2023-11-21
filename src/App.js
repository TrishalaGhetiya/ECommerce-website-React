import React from "react";
import { Route } from "react-router-dom";
import Store from "./pages/Store";
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Layout/Header";
import CartProvider from "./store/cartProvider";
import { Redirect, Switch, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetails";

function App() {

  const location = useLocation();
  const isStorePage = location.pathname === '/Store';

  return (
    <CartProvider>
      <Header isStorePage={isStorePage} />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/Home' />
          </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/AboutUs">
          <About />
        </Route>
        <Route path="/Store" exact>
          <Store />
        </Route>
        <Route path="/ContactUs">
          <Contact />
        </Route>
        <Route path="/Store/:ProductId">
          <ProductDetail />
        </Route>
        </Switch>
      </main>
    </CartProvider>
  );
}

export default App;
