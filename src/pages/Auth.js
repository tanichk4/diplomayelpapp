
import React, { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import Form from "../components/Form";
import app from "../base";
import { useNav } from "../hooks/useNav";
import { useInput } from "../hooks/useInput";
import { auth } from "../base";

import grapeImage from "../assets/grapes.svg";
import leafImage from "../assets/leaf.svg";
import appleImage from "../assets/apple.svg";
import orangeImage from "../assets/orange.svg";
import hungryImage from "../assets/hungry.svg";

const Auth = () => {
  const { goTo } = useNav();
  const email = useInput();
  const pass = useInput();
  const [errorMessage, setErrorMessage] = useState("");

  const { setCurrentUser } = useContext(AuthContext);

  const handleSignIn = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.value,
        pass.value
      );
      const user = userCredential.user;

      if (user) {
        setCurrentUser(user);
        goTo("/");
      }
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          setErrorMessage("Invalid email.");
          break;
        case "auth/user-disabled":
          setErrorMessage("Your account has been disabled.");
          break;
        case "auth/user-not-found":
          setErrorMessage("User not found. Please check your email.");
          break;
        case "auth/wrong-password":
          setErrorMessage("Invalid password.");
          break;
        default:
          setErrorMessage("An error occurred. Please try again later.");
          break;
      }
    }
  };

  return (
    <>
      <img src={grapeImage} alt="grape" className="image image-grape" />
      <img src={leafImage} alt="leaf" className="image image-leaf" />
      <img src={appleImage} alt="apple" className="image image-apple" />
      <img src={orangeImage} alt="orange" className="image image-orange" />
      <img src={hungryImage} alt="hungry" className="image image-hungry" />
      <Form
        onSubmit={handleSignIn}
        email={email}
        pass={pass}
        addAccount={true}
        error={errorMessage}
      />
    </>
  );
};

export default Auth;
