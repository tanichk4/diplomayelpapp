import { useEffect, useRef, useState } from "react";
import CartItem from "./CartItem";
import stopWatchImage from "../assets/stopwatch.png";
import arrow from "../assets/arrow.svg";
import classNames from "classnames";

const Cart = ({
  handleHideCart,
  cartItems,
  handleAddToCart,
  handleRemoveFromCart,
  setCartItems,
}) => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const cartItemsRef = useRef(null);

  useEffect(() => {
    if (cartItemsRef.current) {
      cartItemsRef.current.scrollTop = cartItemsRef.current.scrollHeight;
    }
  }, [cartItems]);
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  const handleOrder = () => {
    if (cartItems.length === 0) {
      return;
    }
    setCartItems([]);
    setIsOrderPlaced(true);
  };

  return (
    <div className="cart__container">
      {isOrderPlaced ? null : (
        <div className="cart__header">
          <h2>Basket</h2>
          <div className="cart__button" onClick={handleHideCart}>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      )}

      {cartItems.length > 0 ? (
        <div className="cart__order--list" ref={cartItemsRef}>
          {cartItems.map((item) => (
            <CartItem
              addToCart={handleAddToCart}
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
          <button className="cart__order--button" onClick={handleOrder}>
            <p>Order - ${calculateTotalPrice()}</p>
          </button>
        </div>
      ) : (
        <>
          {isOrderPlaced ? (
            <div className="cart--placed">
              <img src={stopWatchImage} alt="stopwatch" />
              <p>In the process of cooking...</p>
            </div>
          ) : (
            <p className="cart--empty">Your cart is empty.</p>
          )}
          <button
            className={classNames("cart__order--button", {
              "cart__order--button--placed": isOrderPlaced,
            })}
            onClick={handleHideCart}
          >
            {isOrderPlaced ? <p>Order more</p> : <p>Order first!</p>}
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
