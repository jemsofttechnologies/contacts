import "react-native-gesture-handler";
import React from "react";
import AppNavContainer from "./navigations";
import { Provider } from "./context";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
	return (
		<Provider>
			<SafeAreaProvider>
				<AppNavContainer />
			</SafeAreaProvider>
		</Provider>
	);
}
