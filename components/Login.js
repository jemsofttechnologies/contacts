import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import tailwind from "tailwind-rn";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import Container from "./Container";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return (
		<Container style={tailwind("flex items-center justify-center")}>
			<CustomInput
				label="Username"
				onChangeText={(text) => setUsername(text)}
				value={username}
				error="This field is required"
			/>
			<CustomInput
				label="Password"
				onChangeText={(text) => setPassword(text)}
				value={password}
				icon={<Text>HIDE</Text>}
				iconPosition="right"
			/>
			<CustomButton
				title="Submit"
				loading={false}
				disabled={false}
				primary={true}
			/>
		</Container>
	);
};

export default Login;

const styles = StyleSheet.create({});
