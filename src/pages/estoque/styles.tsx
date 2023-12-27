import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
		padding: 25,
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
        backgroundColor: "#fff"
	},
	header: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		padding: 20,
		fontSize: 20,
		fontWeight: "bold",
		color: "#2D4468",
		textAlign: "center",
	},
	alert: {
		fontSize: 14,
		fontWeight: "bold",
		color: "#2D4468",
		textAlign: "center",
	}
});