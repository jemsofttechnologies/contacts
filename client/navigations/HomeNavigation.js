import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ContactDetailScreen from "../screens/ContactDetailScreen";
import ContactsScreen from "../screens/ContactsScreen";
import CreateContactScreen from "../screens/CreateContactScreen";
import SettingsScreen from "../screens/SettingsScreen";

const HomeNavigation = () => {
	const HomeStack = createNativeStackNavigator();
	return (
		<HomeStack.Navigator initialRouteName="Contacts">
			<HomeStack.Screen name="Contacts" component={ContactsScreen} />
			<HomeStack.Screen
				name="ContactDetail"
				component={ContactDetailScreen}
			/>
			<HomeStack.Screen
				name="CreateContact"
				component={CreateContactScreen}
			/>
			<HomeStack.Screen name="Settings" component={SettingsScreen} />
		</HomeStack.Navigator>
	);
};

export default HomeNavigation;
