import React, { useState } from "react";
import classnames from "classnames";
import "../styles/Item.scss";
import addImage from "../assets/add.svg";
import tickImage from "../assets/tick.svg";

const Item = ({ image, title, description, price, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  const buttonClassName = classnames("item--info__button", {
    "item--info__button--clicked": null,
  });

  return (
    <div className="item--container">
      <div className="item--description">
        <div className="item--description--image--container">
          <img src={image} alt="image" className="item--description--image" />
        </div>
        <div className="item--description__text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="item--info">
          <h2 className="item--info__price">${price}</h2>
          <div className={buttonClassName} onClick={handleClick}>
            <img src={addImage} alt="add" className="item--description--icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
