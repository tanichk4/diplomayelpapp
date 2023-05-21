import React from "react";

const CartItem = ({
  title,
  description,
  price,
  quantity,
  type,
  removeFromCart,
  addToCart,
  cartItems,
  setCartItems,
}) => {
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      removeFromCart({ title, type, price, quantity: quantity - 1 });
    } else if (quantity === 1) {
      removeFromCart({ title });
    }
  };
  const handleIncreaseQuantity = () => {
    addToCart({ title, type, price, quantity: quantity + 1 });
  };

  return (
    <div className="cart--item">
      <div className="cart--item__image"></div>
      <div className="cart--item__details">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <p className="cart--item__price">${price}</p>
      <div className="cart--item__quantity">
        <button className="button--order" onClick={handleDecreaseQuantity}>
          <span>-</span>
        </button>
        <p>x {quantity}</p>
        <button className="button--order" onClick={handleIncreaseQuantity}>
          <span>+</span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
