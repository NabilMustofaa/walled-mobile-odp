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
import React from 'react'

import TransactionItem from "./TransactionItem";

const TransactionList = () => {
  return (
    <View
				style={{
					flex: 1,
					marginHorizontal: 20,
					marginVertical: 15,
					backgroundColor: "white",
					borderRadius: 10,
				}}
			>
				<Text
					style={{
						fontSize: 20,
						fontWeight: "bold",
						borderBottomColor: "lightgray",
						borderBottomWidth: 1,
						borderRadiusT: 10,
						paddingHorizontal: 15,
						paddingVertical: 15,
					}}
				>
					Transaction History
				</Text>
				<ScrollView>
					<TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
				</ScrollView>
			</View>
  )
}

export default TransactionList

const styles = StyleSheet.create({})