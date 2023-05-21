import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
