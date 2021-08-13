import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DrawerNavigation from "./navigations/DrawerNavigation";
import AuthNavigation from "./navigations/AuthNavigation";

export default function App() {
	const [user, setUser] = useState(true);
	return (
		<NavigationContainer>
				{user ? <DrawerNavigation /> : <AuthNavigation />}
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
