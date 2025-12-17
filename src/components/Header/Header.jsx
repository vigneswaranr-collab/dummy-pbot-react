import React from "react";
import Head from "./Head";
import Navbar from "./Navbar";
import Search from "./Search";
import "./Header.css";

const Header = ({ cartItems, favoriteItems }) => {
  return (
    <>
      <Head />
      <Search cartItems={cartItems} favoriteItems={favoriteItems} />
      <Navbar />
    </>
  );
};

export default Header;
