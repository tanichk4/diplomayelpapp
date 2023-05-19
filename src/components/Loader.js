import React, { useEffect, useState } from "react";
import "../styles/Loader.scss";
import grapesImage from "../assets/grapes.svg";
import burgerImage from "../assets/burger.svg";

const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loading">
      {visible && (
        <div className="hello-text">
          <img
            src={grapesImage}
            alt="grapes"
            className="loading-image loading-image-grape"
          />
          <img
            src={burgerImage}
            alt="burger"
            className="loading-image loading-image-burger"
          />
          <h2>Yelp App</h2> <p>developed by Tania Fedorkiv</p>
        </div>
      )}
      <div className="loading-overlay">
        <div className="loading-content">
          <div className={`loading-div left ${visible ? "visible" : ""}`}></div>
          <div
            className={`loading-div right ${visible ? "visible" : ""}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
