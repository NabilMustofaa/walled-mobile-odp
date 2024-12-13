import {
	StyleSheet,
	Text,
	View,
	Image
} from "react-native";

const sun = require("../assets/sun.png");

import React from 'react'

const Hero = () => {
  return (
    <View
				style={{
					width: "100%",
					flexDirection: "row",
					paddingHorizontal: 20,
					marginTop: 30,
				}}
			>
				<View style={{ flex: 1, justifyContent: "space-between" }}>
					<Text style={{ fontSize: 24, fontWeight: "bold" }}>
						Good Morning, Nabil
					</Text>
					<Text style={{ fontSize: 18 }}>
						Check All your incoming and outgoing transaction here !
					</Text>
				</View>
				<Image source={sun} style={{ width: 100, height: 100, objectFit:"fill" }} />
			</View>
  )
}

export default Hero

const styles = StyleSheet.create({})