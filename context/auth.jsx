"use client";
import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
// Creating the user context
const AuthContext = createContext();

// Making the function which will wrap the whole app using Context Provider
export default function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  const token = !(Cookies.get("jwt") === undefined);
  useEffect(() => {
    setIsAuth(token);
  }, [token]);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

// Make useUserContext Hook to easily use our context throughout the application
export function useAuthContext() {
  return useContext(AuthContext);
}
