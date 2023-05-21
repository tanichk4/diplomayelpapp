import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../base";
import { useInput } from "../hooks/useInput";
import { useNav } from "../hooks/useNav";
import Form from "../components/Form";
import app from "../base";

import grapeImage from "../assets/grapes.svg";
import leafImage from "../assets/leaf.svg";
import appleImage from "../assets/apple.svg";
import orangeImage from "../assets/orange.svg";
import hungryImage from "../assets/hungry.svg";

const Register = () => {
  const email = useInput();
  const pass = useInput();
  const secondPass = useInput();
  const { goTo } = useNav();
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();

    if (!email.value.trim()) {
      setErrorMessage("Please enter your email.");
      return;
    }
    if (!pass.value.trim() || !secondPass.value.trim()) {
      setErrorMessage("Please enter both passwords.");
      return;
    }
    if (pass.value.trim() !== secondPass.value.trim()) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email.value, pass.value);
      goTo("/login");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          setErrorMessage("Invalid email.");
          break;
        case "auth/weak-password":
          setErrorMessage("Weak password. Please choose a stronger password.");
          break;
        case "auth/email-already-in-use":
          setErrorMessage("Email is already in use.");
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
        onSubmit={handleRegister}
        email={email}
        pass={pass}
        secondPass={secondPass}
        error={errorMessage}
      />
    </>
  );
};

export default Register;
