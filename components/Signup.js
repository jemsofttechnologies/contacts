import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import tailwind from "tailwind-rn";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import Container from "./Container";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

const Signup = ({ onSubmit, handleChange, values, errors }) => {
	const { navigate } = useNavigation();
	return (
		<Container style={tailwind("flex items-center justify-center")}>
			<Image
				height={70}
				width={70}
				style={tailwind(`h-48 w-56 self-center mt-4`)}
				source={require("../assets/logo.png")}
			/>
			<View>
				<Text
					style={tailwind(`mb-6 self-center text-blue-400 text-2xl`)}
				>
					Welcome to Contacts
				</Text>
				<View>
					<CustomInput
						name="firstName"
						label="First Name"
						onChangeText={(value) =>
							handleChange({
								name: "firstName",
								value,
							})
						}
						value={values.firstName}
						error={errors.firstName}
					/>
					<CustomInput
						name="lastName"
						label="Last Name"
						value={values.lastName}
						error={errors.lastName}
						onChangeText={(value) =>
							handleChange({
								name: "lastName",
								value,
							})
						}
					/>
					<CustomInput
						name="username"
						label="Username"
						value={values.username}
						error={errors.username}
						onChangeText={(value) =>
							handleChange({
								name: "username",
								value,
							})
						}
					/>
					<CustomInput
						name="email"
						label="Email"
						value={values.email}
						error={errors.email}
						onChangeText={(value) =>
							handleChange({
								name: "email",
								value,
							})
						}
					/>
					<CustomInput
						label="Password"
						name="password"
						value={values.password}
						error={errors.password}
						secureTextEntry={true}
						icon={<Text>Show</Text>}
						iconPosition="right"
						onChangeText={(value) =>
							handleChange({
								name: "password",
								value,
							})
						}
					/>
					<CustomButton
						title="Register"
						loading={false}
						disabled={false}
						primary={true}
						onPress={onSubmit}
					/>
				</View>
				<View style={tailwind(`flex-row justify-center mt-5 mb-10`)}>
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
			</View>
		</Container>
	);
};

export default Signup;

const styles = StyleSheet.create({});
