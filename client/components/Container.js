import React from "react";
import { StyleSheet } from "react-native";
import tailwind from "tailwind-rn";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Container = ({ children }) => {
	return (
		<SafeAreaView>
			<StatusBar style="dark" />
			<KeyboardAwareScrollView style={tailwind(`p-2`)}>
				{children}
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
};

export default Container;

const styles = StyleSheet.create({});
