import arrow from "../assets/arrow.svg";
import React from "react";
import CartItem from "./CartItem";

const Cart = ({
  handleHideCart,
  cartItems,
  handleAddToCart,
  handleRemoveFromCart,
  setCartItems,
}) => {
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  return (
    <div className="cart__container">
      <div className="cart__header">
        <h2>Basket</h2>
        <div className="cart__button" onClick={handleHideCart}>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      {cartItems.length > 0 ? (
        <div className="cart__order--list">
          {cartItems.map((item) => (
            <CartItem
              addToCart={handleAddToCart}
              type={item.type}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              quantity={item.quantity}
              removeFromCart={handleRemoveFromCart}
              key={item.title}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div className="cart__total">
        <p className="cart__total--text">Total Price:</p>
        <p className="cart__total--price">${calculateTotalPrice()}</p>
      </div>
    </div>
  );
};

export default Cart;
