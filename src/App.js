import React, { useContext } from "react";
import { Route } from "react-router-dom";
import Store from "./pages/Store";
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Layout/Header";
import CartProvider from "./store/cartProvider";
import {
  Redirect,
  Switch,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetails";
import Login from "./pages/Login";
import AuthContext from "./store/auth-context";

function App() {
  const location = useLocation();
  const isStorePage = location.pathname === "/Store";

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  var minutes = 5;
  var now = new Date().getTime();
  var setupTime = localStorage.getItem('setupTime');
  if(setupTime == null){
    localStorage.setItem('setupTime', now)
  } else {
    if(now-setupTime > minutes*60*1000){
      localStorage.clear();
      authCtx.logout();
      localStorage.setItem('setupTime', now);
    }
  }

  return (
    <CartProvider>
      <Header isStorePage={isStorePage} />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/Home" />
          </Route>
          {!isLoggedIn && <Route path="/Login">
            <Login />
          </Route>}
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/AboutUs">
            <About />
          </Route>
          <Route path="/Store" exact>
            {!isLoggedIn && <Redirect to="/Login" />}
            {isLoggedIn && <Store />}
          </Route>
          <Route path="/ContactUs">
            <Contact />
          </Route>
          {isLoggedIn && <Route path="/Store/:ProductId" exact>
            <ProductDetail />
          </Route>}
        </Switch>
      </main>
    </CartProvider>
  );
}

export default App;
