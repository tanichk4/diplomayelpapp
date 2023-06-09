import "./styles/index.scss";
import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Auth from "./pages/Auth";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { AuthContext } from "./context/AuthContext";

const PrivateRoute = ({ children }) => {
  let { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
};

const AppRouter = () => {
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
      </Routes>
    </div>
  );
};

export default AppRouter;
