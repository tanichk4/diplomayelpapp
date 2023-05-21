import React, { useState } from "react";
import classnames from "classnames";

const Meal = ({
  type,
  image,
  title,
  description,
  price,
  handleShowCart,
  addToCart,
  cartItems,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const isItemInCart = cartItems.some((cartItem) => cartItem.title === title);

  const handleClick = () => {
    if (!isItemInCart) {
      addToCart({ type, image, title, description, price });
      setIsClicked(true);

      if (cartItems.length === 0) {
        handleShowCart();
      }
    }
  };

  const itemClassName = classnames("item--description", {
    "item--description--active": isItemInCart,
  });

  const itemDescriptionClassName = classnames("item--description--reaction", {
    "item--description--reaction--active": isItemInCart,
    "item--description--reaction--clicked": isClicked,
  });

  const buttonClassName = classnames("item--description--info__button", {
    "item--description--info__button--active": isItemInCart,
  });

  const buttonImageClassName = classnames("info__button__image", {
    "info__button__image--active": isItemInCart,
  });

  return (
    <div className={itemClassName}>
      <div className={itemDescriptionClassName}>
        <div />
      </div>
      <div className="item--description--image--container">
        <img src={image} alt="image" className="item--description--image" />
      </div>
      <div className="item--description__text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="item--description--info">
        <h2 className="item--description--info__price">${price}</h2>
        <div className={buttonClassName} onClick={handleClick}>
          <div className={buttonImageClassName} />
        </div>
      </div>
    </div>
  );
};

export default Meal;
