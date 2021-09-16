import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeNavigation from "./HomeNavigation";

const DrawerNavigation = () => {
	const DrawerStack = createDrawerNavigator();
	return (
		<DrawerStack.Navigator>
			<DrawerStack.Screen
				name="Home"
				component={HomeNavigation}
				options={{ headerShown: false }}
			/>
		</DrawerStack.Navigator>
	);
};

export default DrawerNavigation;
