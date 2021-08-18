import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import tailwind from "tailwind-rn";
import { SafeAreaView } from "react-native-safe-area-context";

const Container = ({ children }) => {
	return (
		<SafeAreaView>
			<ScrollView>
				<View style={tailwind("p-4")}>{children}</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Container;

const styles = StyleSheet.create({});
