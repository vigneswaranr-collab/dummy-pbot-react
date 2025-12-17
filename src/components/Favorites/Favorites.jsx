import { Link } from "react-router-dom";
import "./Favorites.css";

const Favorites = ({ favoriteItems, removeFromFavorite, addToCart }) => {
  return (
    <>
      <section className="favorites-items">
        <div className="container favorites-flex">
          <div className="favorites-details">
            <h2 className="favorites-heading">My Favorites</h2>
            {favoriteItems.length === 0 && (
              <h1 className="no-items product">
                You have no favorite items yet.
              </h1>
            )}
            <div className="favorites-grid">
              {favoriteItems.map((item) => {
                return (
                  <div className="favorites-card product" key={item.id}>
                    <div className="favorites-img">
                      <span className="discount">{item.discount}% Off</span>
                      <img
                        src={item.img}
                        alt="Picture of this item is unavailable"
                      />
                      <button
                        className="remove-favorite"
                        onClick={() => removeFromFavorite(item)}
                      >
                        <i className="fa-solid fa-heart"></i>
                      </button>
                    </div>
                    <div className="favorites-info">
                      <Link to={`/all-products/${item.id}`}>
                        <h3>{item.name}</h3>
                      </Link>
                      <div className="rate">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="price">
                        <h4>${item.price}.00</h4>
                        <button onClick={() => addToCart(item)}>
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Favorites;
