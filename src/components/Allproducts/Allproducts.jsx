import React from "react";
import { Link } from "react-router-dom";
import "./allproducts.css";

const Allproducts = ({ allProductsData, addToCart, favoriteItems, addToFavorite }) => {
  // Check if a product is in favorites
  const isFavorite = (productId) => {
    return favoriteItems?.some((item) => item.id === productId);
  };

  return (
    <>
      <h1 className="page-header">All Products</h1>
      <div className="container grid3">
        {allProductsData.map((product, index) => {
          return (
            <div className="box" key={index}>
              <div className="product mtop">
                <div className="img">
                  <span className="discount">{product.discount}% Off</span>
                  <img src={product.img} alt="product-image" />
                  <div className="product-like">
                    <i
                      className={isFavorite(product.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                      onClick={() => addToFavorite(product)}
                      style={{ color: isFavorite(product.id) ? "#e94560" : "inherit", cursor: "pointer" }}
                    ></i>
                  </div>
                </div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <Link to={`/all-products/${product.id}`}>
                    <h5>Click here for more Info</h5>
                  </Link>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>{product.price}.00</h4>
                    <button
                      aria-label="Add to cart"
                      onClick={() => addToCart(product)}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Allproducts;
