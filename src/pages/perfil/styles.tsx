import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
		flex: 1,
		padding: 20,
		justifyContent: "center",
		alignItems: "center",
        backgroundColor: "#fff"
	},
	title: {
		padding: 20,
		fontSize: 20,
		fontWeight: "bold",
		color: "#2D4468",
		textAlign: "center",
	},
	submit: {
		marginTop: 15,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		backgroundColor: "#2D4468",
		borderRadius: 10
	},
	textSubmit: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#fff",
	},
});