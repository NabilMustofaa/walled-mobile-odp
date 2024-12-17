import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


import { loginUser } from "../api/authApi";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('access_token');
        setIsLoggedIn(accessToken !== null);
      } catch (error) {
        console.error(error);
      }
    };
    checkLoginStatus();
  }, []);

  const login = async (token) => {
    setUser({token});
      await AsyncStorage.setItem('access_token', data.access_token);
      
  }


  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('access_token');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };