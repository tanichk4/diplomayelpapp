import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext();
const USER_KEY = "user"

export const AuthProvider = ({ children }) => {
  const storedUser = localStorage.getItem(USER_KEY);

  const [currentUser, setCurrentUser] = useState(
    storedUser && storedUser !== "n" ? JSON.parse(storedUser) : null
  );

  useEffect(() => {
    if (!currentUser) {
      localStorage.setItem(USER_KEY, null);
    } else {
      localStorage.setItem(USER_KEY, JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
