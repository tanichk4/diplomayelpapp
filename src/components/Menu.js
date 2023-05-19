import React, { useState } from "react";
import Icon from "../utils/Icon";
import classnames from "classnames";
import "../styles/Menu.scss";
import { useNav } from "../hooks/useNav";

const menuList = [
  {
    id: 1,
    title: "Home",
    svgName: "home",
    path: "/",
  },
  {
    id: 2,
    title: "Menu",
    svgName: "menu",
    path: "/menu",
  },
  {
    id: 3,
    title: "Trending",
    svgName: "trending",
    path: "/trending",
  },
  {
    id: 4,
    title: "Settings",
    svgName: "setting",
    path: "/settings",
  },
];

const Menu = () => {
  const { goTo } = useNav();
  const [activeItem, setActiveItem] = useState(menuList[0]);
  const [isDisabled, setIsDisabled] = useState(false);

  const changeActiveItem = (item) => {
    if (!isDisabled) {
      setIsDisabled(true);
      setActiveItem(item);
      goTo(item.path);
      setIsDisabled(false);
    }
  };

  return (
    <nav className="menu">
      <ul className="menu__list">
        {menuList.map((item) => (
          <li
            className={classnames("menu__item", {
              "menu__item--active": activeItem.id === item.id,
            })}
            key={item.id}
            onClick={() => changeActiveItem(item)}
          >
            <div
              className={
                activeItem.id === item.id
                  ? "menu__icon menu__icon--active"
                  : "menu__icon"
              }
            >
              <Icon name={item.svgName} />
            </div>
            <span className="menu__title">{item.title}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
