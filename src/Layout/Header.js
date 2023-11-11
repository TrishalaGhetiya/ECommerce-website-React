import React from "react";

import "bootstrap/dist/css/bootstrap.css";

const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark ">
        <div className="container">
          <a href="#home">Home</a>
        </div>
        <div className="container-sm">
          <a href="#Store">Store</a>
        </div>
        <div className="container-sm">
          <a href="#About">About</a>
        </div>
        <div className="container-sm">
          <button onClick={props.onShowCart}>Cart</button>
        </div>
      </nav>
      <div className="container">
        <h1>The Generics</h1>
      </div>
    </>
  );
};

export default Header;
