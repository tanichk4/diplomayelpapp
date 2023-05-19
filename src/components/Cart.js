import React, { useState, useCallback } from "react";
import arrow from "../assets/arrow.svg";
import stopwatch from "../assets/stopwatch.png";
import hungryImage from "../assets/hungry.svg";

import "../styles/Cart.scss";

const Cart = React.memo(({ cartItems, removeFromCart, addToCart }) => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const totalPrice = calculateTotalPrice(cartItems);

  const handleOrder = useCallback(() => {
    setIsOrderPlaced(cartItems.length > 0);
  }, [cartItems]);

  const handleReturnToOrder = useCallback(() => {
    setIsOrderPlaced(false);
  }, []);

  return (
    <div className="cart__container">
      <div className="cart__header">
        <h2>Basket</h2>
        <div className="cart__button">
          <img src={arrow} alt="arrow" />
        </div>
      </div>

      {isOrderPlaced ? (
        <div className="cart__placed-order">
          <img src={stopwatch} alt="stopwatch" />
          <p>in the process of cooking...</p>
          <button className="cart__order--button" onClick={handleReturnToOrder}>
            Return to Order
          </button>
        </div>
      ) : (
        <div>
          {cartItems.length === 0 ? (
            <p className="cart__placed-order--not">Order something first</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="cart--item">
                  <div className="cart--item__image">
                    <img src={hungryImage} alt="hungry" />
                  </div>
                  <div className="cart--item__details">
                    <h2 className="cart--item__title">{item.title}</h2>
                    <p>{item.description}</p>
                    {console.log(item.type)}
                  </div>
                  <div className="cart--item__price">
                    <p>x{item.quantity} </p>
                    <p> ${item.price}</p>
                  </div>

                  <button
                    onClick={() => addToCart(item)}
                    className="button button--increment"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item)}
                    className="button button--decrement"
                  >
                    -
                  </button>
                </div>
              ))}
              <button className="cart__order--button" onClick={handleOrder}>
                Order - ${totalPrice}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
});

function calculateTotalPrice(cartItems) {
  return cartItems
    .reduce((total, item) => total + item.quantity * item.price, 0)
    .toFixed();
}

export default Cart;
