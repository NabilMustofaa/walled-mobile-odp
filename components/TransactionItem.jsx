import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
const profile = require("../assets/profile.png");
const TransactionItem = ({amount,type,description,created_at}) => {
  return (
<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							paddingHorizontal: 15,
							paddingVertical: 10,
							gap: 10,
						}}
					>
						<View
							style={{ flex: 1, flexDirection: "row", alignItems: "center", gap: 10 }}
						>
							<Image source={profile} style={{ width: 50, height: 50 }} />
							<View>
								<Text style={{ fontSize: 16, fontWeight: "bold" }}>{description}</Text>
								<Text style={{ fontSize: 14 }}>{type == "c" ? "Top Up" : "Transfer"}</Text>
								<Text style={{ fontSize: 12, color: "gray" }}>{new Date(created_at).toLocaleString()}</Text>
							</View>
						</View>
						<Text> {type == "c" ? "+" : "-"} Rp. {amount}</Text>
					</View>
  )
}

export default TransactionItem

const styles = StyleSheet.create({})