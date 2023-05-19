import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useInput } from "../hooks/useInput";
import { useNav } from "../hooks/useNav";
import Form from "./Form";
import app from "./base";
import Loader from "./Loader";

import "../styles/Auth.scss";

import grapeImage from "../assets/grapes.svg";
import leafImage from "../assets/leaf.svg";
import appleImage from "../assets/apple.svg";
import orangeImage from "../assets/orange.svg";
import hungryImage from "../assets/hungry.svg";

const auth = getAuth();

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const email = useInput();
  const pass = useInput();
  const secondPass = useInput();

  const { goTo } = useNav();

  const handleRegister = async (event) => {
    event.preventDefault();

    if (pass.value.trim() !== secondPass.value.trim()) return;

    try {
      await createUserWithEmailAndPassword(auth, email.value, pass.value);
      goTo("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <img src={grapeImage} alt="grape" className="image image-grape" />
      <img src={leafImage} alt="leaf" className="image image-leaf" />
      <img src={appleImage} alt="apple" className="image image-apple" />
      <img src={orangeImage} alt="orange" className="image image-orange" />
      <img src={hungryImage} alt="hungry" className="image image-hungry" />
      {isLoading && <Loader />}
      <Form
        onSubmit={handleRegister}
        email={email}
        pass={pass}
        secondPass={secondPass}
      />
    </>
  );
};

export default Register;
