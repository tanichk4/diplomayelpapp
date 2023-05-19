import React from "react";
import Profile from "./Profile";
import Menu from "./Menu";
import Delivery from "./Delivery";

import "../styles/appLeft.scss";

const AppLeft = () => {
  return (
    <div className="app__left">
      <Profile />
      <Menu />
      <Delivery />
    </div>
  );
};

export default AppLeft;
