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

const Signup = () => {
	const [values, setValues] = useState({
		username: "",
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const { navigate } = useNavigation();
	const headerHeight = useHeaderHeight();
	return (
		<Container style={tailwind("flex items-center justify-center")}>
			<Image
				height={70}
				width={70}
				style={tailwind(`h-48 w-56 self-center mt-4`)}
				source={require("../assets/logo.png")}
			/>
			<KeyboardAvoidingView
				keyboardVerticalOffset={headerHeight + 40}
				style={{ flex: 1 }}
				behavior="padding"
			>
				<Text
					style={tailwind(`mb-6 self-center text-blue-400 text-2xl`)}
				>
					Welcome to Contacts
				</Text>
				<View>
					<CustomInput
						name="firstName"
						label="First Name"
						onChangeText={(text) =>
							setValues({ ...values, firstName: text })
						}
						value={values.firstName}
					/>
					<CustomInput
						name="lastName"
						label="Last Name"
						value={values.lastName}
						onChangeText={(text) =>
							setValues({ ...values, lastName: text })
						}
					/>
					<CustomInput
						name="username"
						label="Username"
						value={values.username}
						onChangeText={(text) =>
							setValues({ ...values, username: text })
						}
					/>
					<CustomInput
						label="Password"
						name="password"
						value={values.password}
						secureTextEntry={true}
						icon={<Text>Show</Text>}
						iconPosition="right"
						onChangeText={(text) =>
							setValues({ ...values, password: text })
						}
					/>
					<CustomButton
						title="Register"
						loading={false}
						disabled={false}
						primary={true}
					/>
				</View>
				<View style={tailwind(`flex-row justify-center mt-10 mb-4`)}>
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
			</KeyboardAvoidingView>
		</Container>
	);
};

export default Signup;

const styles = StyleSheet.create({});
