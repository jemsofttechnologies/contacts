import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import tailwind from "tailwind-rn";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import Container from "./Container";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { KeyboardAvoidingView } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { navigate } = useNavigation();
	const headerHeight = useHeaderHeight();
	return (
		<Container style={tailwind("flex items-center justify-center")}>
			<KeyboardAvoidingView
				keyboardVerticalOffset={headerHeight + 20}
				style={{ flex: 1 }}
				behavior="padding"
			>
				<Image
					height={70}
					width={70}
					style={tailwind(`h-48 w-56 self-center mt-4`)}
					source={require("../assets/logo.png")}
				/>
				<View>
					<Text
						style={tailwind(
							`mb-8 self-center text-blue-400 text-2xl`
						)}
					>
						Welcome to Contacts
					</Text>
					<View>
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
							title="Login"
							loading={false}
							disabled={false}
							primary={true}
						/>
					</View>
					<View
						style={tailwind(`flex-row justify-center mt-32 mb-4`)}
					>
						<Text style={tailwind(`mr-1 text-base`)}>
							Don't have an account?
						</Text>
						<TouchableOpacity onPress={(e) => navigate("Signup")}>
							<Text
								style={tailwind(`text-blue-400 font-bold text-base`)}
							>
								Register!
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</KeyboardAvoidingView>
		</Container>
	);
};

export default Login;

const styles = StyleSheet.create({});
