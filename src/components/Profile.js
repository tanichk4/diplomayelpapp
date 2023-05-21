import React from "react";
import profileAvatar from "../assets/avatar.JPG";

const Profile = () => {
  return (
    <div className="profile__container">
      <div className="profile__avatar__container">
        <img src={profileAvatar} alt="avatar" className="profile__avatar" />
      </div>
      <h2 className="profile__title">Tania Fedorkiv</h2>
    </div>
  );
};

export default Profile;
