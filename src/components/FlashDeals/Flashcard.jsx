import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// setting up arrows to display next and previous arrows and make them work
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button aria-label="Next slide" className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button aria-label="Previous slide" className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};

const Flashcard = ({ productItems, addToCart, favoriteItems, addToFavorite }) => {
  // Check if a product is in favorites
  const isFavorite = (productId) => {
    return favoriteItems?.some((item) => item.id === productId);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          dots: true, // Show dots on smaller screens
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: true, // Show dots on smaller screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: true, // Show dots on smaller screens
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true, // Show dots on even smaller screens
        },
      },
    ],
  };
  return (
    <>
      {/* Used the react-slick-slider to make a fast and effective slider for the page */}
      <Slider {...settings}>
        {productItems.map((product, index) => {
          // mapping throught the array of data and using objects in the array to use in the page
          return (
            <div className="box" key={index}>
              <div className="product">
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
      </Slider>
    </>
  );
};

export default Flashcard;
