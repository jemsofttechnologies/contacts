import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import tailwind from "tailwind-rn";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import Container from "./Container";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { KeyboardAvoidingView } from "react-native";

const Signup = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { navigate } = useNavigation();
	return (
		<Container style={tailwind("flex items-center justify-center")}>
			<Image
				height={70}
				width={70}
				style={tailwind(`h-48 w-56 self-center mt-4`)}
				source={require("../assets/logo.png")}
			/>
			<KeyboardAvoidingView>
				<Text
					style={tailwind(`mb-6 self-center text-blue-400 text-2xl`)}
				>
					Welcome to Contacts
				</Text>
				<View>
					<CustomInput
						label="Name"
						onChangeText={(text) => setUsername(text)}
						value={username}
					/>
					<CustomInput
						label="Email"
						onChangeText={(text) => setUsername(text)}
						value={username}
					/>
					<CustomInput
						label="Username"
						onChangeText={(text) => setUsername(text)}
						value={username}
					/>
					<CustomInput
						label="Password"
						onChangeText={(text) => setPassword(text)}
						value={password}
						secureTextEntry={true}
						icon={<Text>Show</Text>}
						iconPosition="right"
					/>
					<CustomButton
						title="Register"
						loading={false}
						disabled={false}
						primary={true}
					/>
				</View>
				<View style={tailwind(`flex-row justify-center mb-4`)}>
					<Text style={tailwind(`mr-1 text-base`)}>
						Already have an account?
					</Text>
					<TouchableOpacity onPress={(e) => navigate("Login")}>
						<Text
							style={tailwind(`text-blue-400 font-bold text-base`)}
						>
							Login!
						</Text>
					</TouchableOpacity>
				</View>
				<View style={{height:100}}></View>
			</KeyboardAvoidingView>
		</Container>
	);
};

export default Signup;

const styles = StyleSheet.create({});
