import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import app from "./base";

import AppLeft from "./AppLeft";
import AppRight from "./AppRight";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
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
        <AppLeft />
        <AppRight />
      </div>
    </>
  );
};

export default Home;
