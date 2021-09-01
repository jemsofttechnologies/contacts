import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import tailwind from "tailwind-rn";

const CustomInput = ({
	onChangeText,
	value,
	label,
	icon,
	iconPosition,
	error,
	...props
}) => {
	const [focused, setFocused] = useState(false);
	return (
		<View style={tailwind("mb-5")}>
			{label && (
				<Text style={tailwind("mb-1 text-base")}>{label}</Text>
			)}
			<View
				style={tailwind(
					`flex flex-row items-center justify-between h-12 border border-gray-900 text-lg rounded-md pl-2 pr-2 mb-1 ${
						iconPosition === "left" ? "flex-row-reverse" : ""
					} ${error ? "border-red-500" : ""} ${
						focused ? "border-blue-300" : ""
					}`
				)}
			>
				<TextInput
					style={[tailwind("flex-1 text-base pt-0 h-8")]}
					onChangeText={onChangeText}
					value={value}
					onFocus={(e) => setFocused(true)}
					onBlur={(e) => setFocused(false)}
					{...props}
				/>
				{icon && <View style={tailwind("")}>{icon}</View>}
			</View>
			{error && (
				<Text style={tailwind("text-sm text-red-600")}>{error}</Text>
			)}
		</View>
	);
};

export default CustomInput;

const styles = StyleSheet.create({});
