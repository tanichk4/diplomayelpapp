import React, { useContext } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import Form from "./Form";
import app from "./base";
import { useNav } from "../hooks/useNav";
import { useInput } from "../hooks/useInput";

import "../styles/Auth.scss";

import grapeImage from "../assets/grapes.svg";
import leafImage from "../assets/leaf.svg";
import appleImage from "../assets/apple.svg";
import orangeImage from "../assets/orange.svg";
import hungryImage from "../assets/hungry.svg";

const auth = getAuth();

const Auth = () => {
  const { goTo } = useNav();
  const email = useInput();
  const pass = useInput();

  const { setCurrentUser } = useContext(AuthContext);

  const handleSignIn = async (event) => {
    event.preventDefault();
    await signInWithEmailAndPassword(auth, email.value, pass.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        if (user) {
          setCurrentUser(user);
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    goTo("/");
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
      />
    </>
  );
};

export default Auth;
