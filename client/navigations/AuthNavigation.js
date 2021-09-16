import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const AuthNavigation = () => {
	const AuthStack = createNativeStackNavigator();
	return (
		<AuthStack.Navigator screenOptions={{ headerShown: false }}>
			<AuthStack.Screen name="Login" component={LoginScreen} />
			<AuthStack.Screen name="Signup" component={SignupScreen} />
		</AuthStack.Navigator>
	);
};

export default AuthNavigation;
