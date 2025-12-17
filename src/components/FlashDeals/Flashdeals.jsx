import React from "react";
import Flashcard from "./Flashcard";

const Flashdeals = ({ productItems, addToCart, favoriteItems, addToFavorite }) => {
  return (
    <>
      <section className="flash background">
        <div className="flashdeal container">
          <div className="heading">
            <i className="fa fa-bolt"></i>
            <h1>Flash Deals</h1>
          </div>
          <Flashcard productItems={productItems} addToCart={addToCart} favoriteItems={favoriteItems} addToFavorite={addToFavorite} />
        </div>
      </section>
    </>
  );
};

export default Flashdeals;
