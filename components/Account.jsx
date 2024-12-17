import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuth } from '../context/AuthContext'


const Account = () => {
  const {userData} = useAuth();
  return (
    <View
    style={{
      flexDirection: "row",
      paddingHorizontal: 20,
      paddingVertical: 20,
      marginHorizontal: 20,
      marginVertical: 30,
      justifyContent: "space-between",
      backgroundColor: "#19918F",
      borderRadius: 20,
    }}
  >
    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
      Account No.
    </Text>
    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
      {userData.account_no}
    </Text>
  </View>
  )
}

export default Account

const styles = StyleSheet.create({})