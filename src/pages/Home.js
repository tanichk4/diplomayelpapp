import { useState, useEffect } from "react";
import Loader from "../components/Loader";

import Delivery from "../components/Delivery";
import Menu from "../components/Menu";
import Profile from "../components/Profile";
import AppRightContent from "../components/AppRightContent";
import PageUnavailable from "../components/PageUnavailable";

const menuList = [
  { id: 1, title: "Home", svgName: "home" },
  { id: 2, title: "Menu", svgName: "menu" },
  { id: 3, title: "Trending", svgName: "trending" },
  { id: 4, title: "Settings", svgName: "setting" },
];
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeItem, setActiveItem] = useState(menuList[0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      <div className="app__container">
        <div className="app__left">
          <Profile />
          <Menu
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            menuList={menuList}
          />
          <Delivery />
        </div>
        <div className="app__right">
          {activeItem === menuList[0] ? (
            <AppRightContent />
          ) : (
            <PageUnavailable />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
