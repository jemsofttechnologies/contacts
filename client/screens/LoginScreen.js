import React from "react";
import { View } from "react-native";
import tailwind from "tailwind-rn";
import Login from "../components/Login";

const LoginScreen = () => {
	return (
		<View style={tailwind(``)}>
			<Login />
		</View>
	);
};

export default LoginScreen;
