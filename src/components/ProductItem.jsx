import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import "../styles/ProductItem.css";

const ProductItem = ({ product }) => {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();
  const cartItem = cart.find((item) => item.id === product.id);

  const handleAddOrUpdate = () => {
    if (cartItem) {
      updateQuantity(product.id, cartItem.quantity + 1); // Increase quantity if item is already in cart
    } else {
      addToCart(product); // Add to cart if it's not there
    }
  };

  const handleDecreaseQuantity = (e) => {
    e.stopPropagation(); // Prevent the button's onClick event from being triggered
    if (cartItem.quantity === 1) {
      removeFromCart(product.id); // Remove the item from cart if quantity is 1
    } else {
      updateQuantity(product.id, cartItem.quantity - 1); // Decrease the quantity
    }
  };

  return (
    <div className="product-item">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
      <div className="product-actions">
        <button
          onClick={handleAddOrUpdate}
          className={cartItem ? "added-button" : "add-to-cart-button"}
        >
          {cartItem ? (
            // Show quantity controls if the item is in the cart
            <div className="quantity-control">
              <button
                onClick={handleDecreaseQuantity}
                className="quantity-button"
              >
                -
              </button>
              <span>{cartItem.quantity}</span> {/* Show the current quantity */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the button's onClick event from being triggered
                  updateQuantity(product.id, cartItem.quantity + 1); // Increase quantity
                }}
                className="quantity-button"
              >
                +
              </button>
            </div>
          ) : (
            "Add to Cart"
          )}
        </button>
        {cartItem && (
          <Link to="/cart" className="go-to-cart-button">
            Go to Cart
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
