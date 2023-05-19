import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import "../styles/InTheMaking.scss";

const InTheMaking = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="making__container">
      <h2>Page in the process of making ;)</h2>
      <Button variant="contained" onClick={handleClick}>
        Return to the previous page
      </Button>
    </div>
  );
};

export default InTheMaking;
