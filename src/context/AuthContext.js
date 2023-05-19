import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const storedUser = localStorage.getItem("user");
  console.log("Stored User:", storedUser);

  const [currentUser, setCurrentUser] = useState(
    storedUser && storedUser !== "n" ? JSON.parse(storedUser) : null
  );

  useEffect(() => {
    if (currentUser === null) {
      localStorage.setItem("user", "null");
    } else {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  console.log("Current User:", currentUser);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
