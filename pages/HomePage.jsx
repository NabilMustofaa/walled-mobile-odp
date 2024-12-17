import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	Image,
	ImageBackground,
	ScrollView,
	TouchableOpacity,
	Button,
} from "react-native";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Account from "../components/Account";
import Balance from "../components/Balance";

const icon = require("../assets/adaptive-icon.png");

import Ionicons from "@expo/vector-icons/Ionicons";
import TransactionList from "../components/TransactionList";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";

export default function HomePage() {
	// const navigation = useNavigation();
	// navigation.navigate("Login");

	const {user} = useAuth();
	console.log(user)
	return (
		<SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
			<Navbar name={"Home"} />

			<Hero />
			<Account />

			<Balance />
			<TransactionList />
    </SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "#FAFBFD",
	},
});
