
import React from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image,
} from "react-native";

const profile = require("../assets/profile.png");
const sun = require("../assets/sun.png");

import Ionicons from "@expo/vector-icons/Ionicons";

const navbar = () => {
  return (
    <View style={styles.navbar}>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						paddingVertical: 10,
						paddingHorizontal: 10,
					}}
				>
					<Image
						source={profile}
						style={{ width: 50, height: 50, marginRight: 10 }}
					/>
					<View>
						<Text style={{ fontSize: 16, fontWeight: "semibold" }}>
							Nabil Mustofa
						</Text>
						<Text style={{ fontSize: 12 }}>React Native</Text>
					</View>
				</View>
				<Ionicons name="sunny-outline" color="#F8AB39" size={30} />
			</View>
  )
}

export default navbar

const styles = StyleSheet.create({
  navbar: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#fff",
		paddingHorizontal: 10,
		elevation: 2,
	},
})