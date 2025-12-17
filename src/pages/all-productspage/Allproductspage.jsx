import React from "react";
import Allproducts from "../../components/Allproducts/Allproducts";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Allproductspage = ({ cartItems, allProductsData, addToCart, favoriteItems, addToFavorite }) => {
  return (
    <>
      <Header cartItems={cartItems} favoriteItems={favoriteItems} />
      <Allproducts allProductsData={allProductsData} addToCart={addToCart} favoriteItems={favoriteItems} addToFavorite={addToFavorite} />
      <Footer />
    </>
  );
};

export default Allproductspage;
