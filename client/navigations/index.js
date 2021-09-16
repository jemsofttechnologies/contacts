import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./DrawerNavigation";
import AuthNavigation from "./AuthNavigation";
import { useContext } from "react";
import { Context } from "../context";

const AppNavContainer = () => {
	const {
		authState: { isLoggedIn },
	} = useContext(Context);
	return (
		<NavigationContainer>
			{isLoggedIn ? <DrawerNavigation /> : <AuthNavigation />}
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({});
export default AppNavContainer;
