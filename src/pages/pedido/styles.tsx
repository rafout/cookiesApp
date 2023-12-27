import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
		flex: 1,
        backgroundColor: "#fff"
	},
	header: {
		backgroundColor: "#b2b2b2",
		zIndex: 3,
	},
	title: {
		padding: 20,
		fontSize: 20,
		fontWeight: "bold",
		color: "#2D4468",
		textAlign: "center",
	},
	viewInputs: {
		flex: 1,
		padding: 20,
		alignItems: "center",
		justifyContent: "center",
	},
	viewIngredient: {
		padding: 10,
		width: '100%',
		justifyContent: "center",
		alignItems: "center",
	},
	textIngredient: {
		padding: 5,
		width: '100%',
		textAlign: "left",
		fontSize: 16,
		fontWeight: "bold",
		color: "#2D4468",
	},
	input: {
		padding: 10,
		fontSize: 14,
		fontWeight: "bold",
		height: 50,
		width: "100%",
		backgroundColor: "#b8b8b8",
		borderRadius: 10,
		color: "#2D4468",
	},
	submit: {
		marginTop: 15,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		width: "95%",
		backgroundColor: "#2D4468",
		borderRadius: 10
	},
	textSubmit: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#fff",
	},
});