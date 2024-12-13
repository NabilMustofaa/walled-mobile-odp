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
import React, { useState } from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";

const Balance = () => {
  const [showBalance,setShowBalance] = useState(true)
  return (
    <View
    style={{
      flexDirection: "row",
      paddingHorizontal: 20,
      paddingVertical: 20,
      marginHorizontal: 20,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 20,
    }}
  >
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 18 }}>Balance</Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>{showBalance ? "Rp. 100.000" : "Rp. ******"}</Text>
        <Ionicons name={showBalance ? "eye-outline" : "eye-off-outline"} onPress={() => setShowBalance(!showBalance)} size={20} />
      </View>
    </View>
    <View style={{ gap: 10 }}>
      <TouchableOpacity
        style={{
          backgroundColor: "#19918F",
          padding: 10,
          borderRadius: 5,
          elevation: 5,
        }}
      >
        <Ionicons name="add-outline" color="#fff" size={20} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#19918F",
          padding: 10,
          borderRadius: 5,
          elevation: 5,
        }}
      >
        <Ionicons name="send-outline" color="#fff" size={20} />
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default Balance

const styles = StyleSheet.create({})