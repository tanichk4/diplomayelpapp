import user1Image from "../assets/user1.svg";
import user2Image from "../assets/user2.svg";
import likeImage from "../assets/like.svg";
import { memo } from "react";

const ArticlesList = ({ color, image, text }) => {
  return (
    <div className="list__container">
      <div className="list__icon" style={{ backgroundColor: color }}>
        <img src={image} alt="list" color={color} />
      </div>
      <div className="list__heading">
        <p>{text}</p>
        <div className="list__reactions">
          <div className="reactions__user reactions__user--1">
            <img src={user1Image} alt="user 1" />
          </div>
          <div className="reactions__user reactions__user--2">
            <img src={user2Image} alt="user 2" className="" />
          </div>
          <div className="reactions__feedback">
            <img src={likeImage} alt="like" />

            <p>28+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ArticlesList);
