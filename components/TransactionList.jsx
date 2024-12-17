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
import React, { useEffect, useState } from 'react'

import TransactionItem from "./TransactionItem";
import { getTransaction } from "../api/transactionApi";
import { useAuth } from "../context/AuthContext";

const TransactionList = () => {
	const {userData} = useAuth();
	const [transactions, setTransactions] = useState([]);

	const fetchTransactions = async () => {
		try {
			const data = await getTransaction();
			console.log(data);
			setTransactions(data.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchTransactions();
	}, [userData]);

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
					{
						transactions.map((transaction) => (
							<TransactionItem key={transaction.id} {...transaction} />
						))
					}

				</ScrollView>
			</View>
  )
}

export default TransactionList

const styles = StyleSheet.create({})