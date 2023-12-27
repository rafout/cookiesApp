import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#2D4468",
	},
	viewInfo: {
		flex: 0.5,
		justifyContent: "center",
	},
	welcome: {
		padding:5,
		fontSize: 18,
		color: "#FFFFFF",
		textAlign: "center",
	},
	about: {
		padding:5,
		fontSize: 16,
		color: "#FFFFFF",
		textAlign: "center",
	},
	login: {
		padding: 10,
		flex: 0.5,
	},
	info: {
		fontSize: 14,
		color: "#fff",
	},
	input: {
		padding: 10,
		fontSize: 14,
		fontWeight: "bold",
		height: 50,
		width: "100%",
		backgroundColor: "#fff",
		borderRadius: 10,
		color: "#2D4468",
	},
	submit: {
		marginTop: 15,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		backgroundColor: "#fff",
		borderRadius: 10
	},
	textSubmit: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#2D4468",
	},
	viewLogo: {
		alignItems: "center",
	},
	logo: {
		width: 100,
    	height: 100,
	}
});