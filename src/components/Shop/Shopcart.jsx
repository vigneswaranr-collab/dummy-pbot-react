import React from "react";
import { Link } from "react-router-dom";

const Shopcart = ({ shopItems, addToCart, favoriteItems, addToFavorite }) => {
  // Check if a product is in favorites
  const isFavorite = (productId) => {
    return favoriteItems?.some((item) => item.id === productId);
  };

  return (
    <>
      {shopItems.map((product, index) => {
        return (
          <div className="box" key={index}>
            <div className="product mtop">
              <div className="img">
                <span className="discount">{product.discount}% Off</span>
                <img src={product.img} alt="" />
                <div className="product-like">
                  <i
                    className={isFavorite(product.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                    onClick={() => addToFavorite(product)}
                    style={{ color: isFavorite(product.id) ? "#e94560" : "inherit", cursor: "pointer" }}
                  ></i>
                </div>
              </div>
              <div className="product-details">
                <Link to={`/all-products/${product.id}`}>
                  <h3 className="truncate">{product.name}</h3>
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
    </>
  );
};

export default Shopcart;
