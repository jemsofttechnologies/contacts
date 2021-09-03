import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import tailwind from "tailwind-rn";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Container = ({ children }) => {
	return (
		<SafeAreaView>
			<StatusBar style="dark"/>
			<ScrollView>
				<View style={tailwind("p-4")}>{children}</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Container;

const styles = StyleSheet.create({});
