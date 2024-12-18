import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { loginUser } from "../api/authApi";
import { getUser } from "../api/userApi";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import api from "../api/api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({})
	
		useEffect(() => {
			AsyncStorage.getItem("access_token").then((token) => {
				if (token) {
					setUser({ token });
					setIsLoggedIn(true);
				}
			})
		}, []);

	const [userData, setUserData] = useState({});

	//set header authorization
	const refreshToken = async () => {
		console.log(user, "ini context");
		api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
	};

	const fetchUser = async () => {
		const response = await getUser();
		console.log(response, "response");
		setUserData(response.data);
	};
	useEffect(() => {
		refreshToken();

		if (user) {
			fetchUser();
		}
	}, [user]);

	const login = async (token) => {
		setUser({ token });
		await AsyncStorage.setItem("access_token", token);
		console.log(token);
	};

	const logout = async () => {
		setUser(null);
		await AsyncStorage.removeItem("access_token");
	};

	return (
		<AuthContext.Provider
			value={{ isLoggedIn, user, login, logout, userData, fetchUser }}
		>
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
