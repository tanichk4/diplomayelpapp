import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNav } from "../hooks/useNav";
import { getAuth, signOut as out } from "firebase/auth";
import classNames from "classnames";

import hungryImage from "../assets/hungry.svg";
import burgerImage from "../assets/burger.svg";
import SearchImage from "../assets/search.svg";
import CartImage from "../assets/cart.svg";
import arrowImage from "../assets/arrow.svg";
import FilterImage from "../assets/filter.svg";
import signOutImage from "../assets/logout.svg";

import ArticlesList from "./ArticlesList";

import Item from "./Item";
import Cart from "./Cart";

import { items } from "./items";
import { articles } from "./articles";
import { itemArray } from "./itemArray";

import "../styles/appRight.scss";

import "../styles/ItemsFilter.scss";

const AppRight = () => {
  const [filterType, setFilterType] = useState(null);
  const [foods, setFoods] = useState(itemArray);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [activeItem, setActiveItem] = useState("");

  const handleFilterClick = (type) => {
    setFilterType(type);
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    handleFilterClick(itemName);
  };

  const handleCartClick = () => {
    setIsCartVisible(true);
  };

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.title === item.title
    );
    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.title === item.title
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }

    setCartItemCount(cartItemCount + 1);
  };
  const handleRemoveFromCart = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.title === item.title
    );
    if (existingItem) {
      if (existingItem.quantity > 1) {
        const updatedCartItems = cartItems.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
        setCartItems(updatedCartItems);
      } else {
        const updatedCartItems = cartItems.filter(
          (cartItem) => cartItem.title !== item.title
        );
        setCartItems(updatedCartItems);
      }
    }

    setCartItemCount(cartItemCount - 1);
  };

  const filteredFoods = filterType
    ? foods.filter((food) => food.type === filterType)
    : foods;

  const itemClass = (itemName) =>
    classNames("items__filter--item", {
      "items__filter--item--active": activeItem === itemName,
    });

  const auth = getAuth();
  const { goTo } = useNav();
  const { setCurrentUser } = useContext(AuthContext);

  const signOut = async (event) => {
    event.preventDefault();

    await out(auth);

    setCurrentUser(null);
    goTo("/");
    localStorage.setItem("user", "null");
  };

  return (
    <div className="app__right">
      <div className="app__right--dishes">
        <div className="app__right--heading">
          <h2 className="app__right--title">
            Welcome To <br /> Lucknow
            <img src={hungryImage} alt="" className="app__right--image" />
          </h2>
        </div>
        <div className="app__right--items">
          <div onClick={() => handleItemClick("")} className={itemClass("")}>
            <div>
              <img src={items[0].image} alt="image" />
            </div>
            <div>
              <p>{items[0].title}</p>
            </div>
          </div>
          <div
            onClick={() => handleItemClick("burger")}
            className={itemClass("burger")}
          >
            <div>
              <img src={items[1].image} alt="image" className="burger__image" />
            </div>
            <div>
              <p>{items[1].title}</p>
            </div>
          </div>
          <div
            onClick={() => handleItemClick("pizza")}
            className={itemClass("pizza")}
          >
            <div>
              <img src={items[2].image} alt="image" />
            </div>
            <div>
              <p>{items[2].title}</p>
            </div>
          </div>
          <div
            onClick={() => handleItemClick("salads")}
            className={itemClass("salads")}
          >
            <div>
              <img src={items[3].image} alt="image" className="salad__image" />
            </div>
            <div>
              <p>{items[3].title}</p>
            </div>
          </div>
          <div
            onClick={() => handleItemClick("donut")}
            className={itemClass("donut")}
          >
            <div>
              <img src={items[4].image} alt="image" className="donut__image" />
            </div>
            <div>
              <p>{items[4].title}</p>
            </div>
          </div>
          <div
            onClick={() => handleItemClick("drinks")}
            className={itemClass("drinks")}
          >
            <div>
              <img src={items[5].image} alt="image" />
            </div>
            <div>
              <p>{items[5].title}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="item--nav">
            <h2>All items</h2>
            <button>
              <img src={FilterImage} alt="SortImage" />
            </button>
          </div>
          <div className="app__right--item__container">
            <div className="app__right--item">
              {filteredFoods.map(({ description, price, image, title }) => {
                return (
                  <Item
                    description={description}
                    price={price}
                    image={image}
                    title={title}
                    key={title}
                    onClick={() =>
                      handleAddToCart({ image, title, description, price })
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="app__right--order">
        <div className="order__nav">

          <div className="order__nav--container">

            {cartItemCount > 0 && <div className="order__nav--notification" />}
            <button className="button">
              <img src={SearchImage} alt="search" />
            </button>
            <button className="button" onClick={signOut}>
              <img src={signOutImage} alt="signOut" />
            </button>
            <button className="button" onClick={handleCartClick}>
              <img src={CartImage} alt="cart" />
            </button>

          </div>


          {isCartVisible && (
            <Cart
              cartItems={cartItems}
              removeFromCart={handleRemoveFromCart}
              addToCart={handleAddToCart}
            />
          )}
        </div>
        <div className="order__nav--offer">
          <img src={burgerImage} alt="burger" />
          <div className="order__nav--offer__text">
            <h2>-50% Off</h2>
            <p>the full price of burgers</p>
          </div>
        </div>

        <div className="order__articles">
          <div className="order__articles--heading">
            <h2 className="order__articles--title">Articles</h2>
            <button className="order__articles--button">
              <img src={arrowImage} alt="arrow" />
            </button>
          </div>
          <div className="articles__list">
            {articles.map(({ color, image, text }, index) => {
              return (
                <ArticlesList
                  color={color}
                  image={image}
                  text={text}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppRight;
