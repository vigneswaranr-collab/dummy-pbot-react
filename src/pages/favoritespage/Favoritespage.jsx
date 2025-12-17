import React from 'react';
import Favorites from '../../components/Favorites/Favorites';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";

const Favoritespage = ({ cartItems, favoriteItems, removeFromFavorite, addToCart }) => {
  return (
    <>
      <Header cartItems={cartItems} favoriteItems={favoriteItems} />
      <Favorites favoriteItems={favoriteItems} removeFromFavorite={removeFromFavorite} addToCart={addToCart} />
      <Footer />
    </>
  )
}

export default Favoritespage;
