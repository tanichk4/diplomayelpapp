import hungryImage from "../assets/hungry.svg";
import burgerImage from "../assets/burger.svg";
import SearchImage from "../assets/search.svg";
import CartImage from "../assets/cart.svg";
import arrowImage from "../assets/arrow.svg";
import FilterImage from "../assets/filter.svg";
import signOutImage from "../assets/logout.svg";

import ArticlesList from "./ArticlesList";
import { articles } from "../data/articles";
import AppRightItems from "./AppRightItems";
import { items } from "../data/items";
import { mealArray } from "../data/mealArray";
import MealDupe from "./MealDupe";
import { useNav } from "../hooks/useNav";
import { useContext, useState, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../base";
import { signOut as out } from "firebase/auth";
import Cart from "../components/Cart";

const AppRightContent = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [selectedType, setSelectedType] = useState("all");
  const [cartItems, setCartItems] = useState([]);
  const itemContainerRef = useRef(null);

  const handleFilterClick = (type) => {
    setSelectedType(type);
    itemContainerRef.current.scrollTo(0, 0);
  };

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.title === item.title
    );

    if (existingItem) {
      existingItem.quantity += 1;
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (item) => {
    const updatedCartItems = cartItems
      .map((cartItem) => {
        if (cartItem.title === item.title) {
          const updatedQuantity = cartItem.quantity - 1;

          if (updatedQuantity === 0) {
            return null;
          }

          return {
            ...cartItem,
            quantity: updatedQuantity,
          };
        }

        return cartItem;
      })
      .filter(Boolean);

    setCartItems(updatedCartItems);
  };

  const handleShowCart = () => {
    setIsCartVisible(true);
  };

  const handleHideCart = () => {
    setIsCartVisible(false);
  };

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
    <div className="app__right--content">
      <div className="app__right--dishes">
        <div className="app__right--heading">
          <h2 className="app__right--title">
            Welcome To <br /> Lucknow
            <img src={hungryImage} alt="" className="app__right--image" />
          </h2>
        </div>
        <div className="app__right--items">
          {items.map((item) => {
            return (
              <AppRightItems
                selectedType={selectedType}
                item={item}
                onClick={handleFilterClick}
                key={item.title}
              />
            );
          })}
        </div>
        <div>
          <div className="item--nav">
            <h2>All items</h2>
            <button>
              <img src={FilterImage} alt="SortImage" />
            </button>
          </div>
          <div ref={itemContainerRef} className="app__right--item__container">
            <div className="app__right--item">
              {mealArray
                .filter(
                  (meal) => selectedType === "all" || meal.type === selectedType
                )
                .map(({ description, price, image, title, id }) => {
                  return (
                    <MealDupe
                      setCartItems={setCartItems}
                      cartItems={cartItems}
                      description={description}
                      price={price}
                      image={image}
                      title={title}
                      key={title}
                      handleShowCart={handleShowCart}
                      addToCart={handleAddToCart}
                      id={id}
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
            {cartItems.length > 0 && (
              <div className="order__nav--notification" />
            )}
            <button className="button">
              <img src={SearchImage} alt="search" />
            </button>
            <button className="button">
              <img src={signOutImage} alt="signOut" onClick={signOut} />
            </button>
            <button className="button" onClick={handleShowCart}>
              <img src={CartImage} alt="cart" />
            </button>
          </div>

          {isCartVisible && (
            <Cart
              cartItems={cartItems}
              handleHideCart={handleHideCart}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
              setCartItems={setCartItems}
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

export default AppRightContent;
