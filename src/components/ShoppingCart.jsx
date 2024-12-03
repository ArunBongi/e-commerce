import React from "react";
import "../styles/ShoppingCart.css";

const ShoppingCart = ({
  cart,
  removeFromCart,
  updateQuantity,
  setShowCheckout,
}) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)}</p>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, e.target.value)}
                />
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={() => setShowCheckout(true)}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
