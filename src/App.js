import React, { useContext } from "react";
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Auth from "./components/Auth";
import Register from "./components/Register";
import Home from "./components/Home";
import InTheMaking from "./components/InTheMaking";
import { AuthContext } from "./context/AuthContext";

const PrivateRoute = ({ children }) => {
  let { currentUser } = useContext(AuthContext);

  if (currentUser === null) {
    return <Navigate to="/login" />;
  }

  return children;
};

const App = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
                <Home />
            </PrivateRoute>
          }
        />
        <Route path="/reg" element={<Register />} />
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/" /> : <Auth />}
        />

        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/menu" element={<InTheMaking />} />
        <Route path="/trending" element={<InTheMaking />} />
        <Route path="/settings" element={<InTheMaking />} />
      </Routes>
    </div>
  );
};

export default App;
