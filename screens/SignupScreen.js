import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Signup from "../components/Signup";

const SignupScreen = () => {
	const [values, setValues] = useState({
		username: "",
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState({});
	const handleChange = ({ name, value }) => {
		setValues({ ...values, [name]: value });
		if (value !== "") {
			if (name === "password") {
				if (value.length <= 5) {
					setErrors((errors) => {
						return {
							...errors,
							[name]:
								"Password should have a minimum length of 6 characters",
						};
					});
				}else{
					setErrors((errors) => {
						return { ...errors, [name]: null };
					});
				}
			} else {
				setErrors((errors) => {
					return { ...errors, [name]: null };
				});
			}
		} else {
			setErrors((errors) => {
				return { ...errors, [name]: "This field is required" };
			});
		}
	};
	const onSubmit = () => {
		// Validations
		console.log(`values`, values);
		if (!values.firstName) {
			setErrors((errors) => {
				return { ...errors, firstName: "Please add your first name" };
			});
		}
		if (!values.lastName) {
			setErrors((errors) => {
				return { ...errors, lastName: "Please add your last name" };
			});
		}
		if (!values.username) {
			setErrors((errors) => {
				return { ...errors, username: "Please add a username" };
			});
		}
		if (!values.email) {
			setErrors((errors) => {
				return { ...errors, email: "Please add your email" };
			});
		}
		if (!values.password) {
			setErrors((errors) => {
				return { ...errors, password: "Please add a password" };
			});
		}
	};
	return (
		<View>
			<Signup
				handleChange={handleChange}
				onSubmit={onSubmit}
				values={values}
				errors={errors}
			/>
		</View>
	);
};

export default SignupScreen;

const styles = StyleSheet.create({});
