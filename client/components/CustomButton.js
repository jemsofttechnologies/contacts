import React, { useState } from "react";
import {
	ActivityIndicator,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tailwind from "tailwind-rn";

const CustomButton = ({
	title,
	disabled,
	loading,
	secondary,
	primary,
	danger,
	onPress,
}) => {
	return (
		<TouchableOpacity
			style={tailwind(
				`mb-5  p-3 rounded-md ${primary ? "bg-blue-400 " : ""} ${
					secondary ? "bg-green-500 " : ""
				} ${danger ? "bg-red-400 " : ""} ${
					disabled ? "bg-gray-300 " : ""
				}`
			)}
			disabled={disabled}
			onPress={onPress}
		>
			<View style={tailwind(`flex-row justify-center`)}>
				{loading && (
					<ActivityIndicator
						color="white"
						style={tailwind(`pr-2 text-red-600`)}
					/>
				)}
				{title && (
					<Text style={tailwind("text-center text-lg text-white")}>
						{title}
					</Text>
				)}
			</View>
		</TouchableOpacity>
	);
};

export default CustomButton;

const styles = StyleSheet.create({});
