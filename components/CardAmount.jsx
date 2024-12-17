import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const CardAmount = () => {
  return (
    <View style={{ padding: 30, paddingBottom: 20, backgroundColor: "white", marginVertical: 10 }}>
      <Text style={{ fontSize: 16, color: "#B3B3B3" }}>Amount</Text>
      <View style={{ borderBottomWidth: 1, borderBottomColor: "#E1E1E1", flexDirection: "row", alignContent: "center", alignItems: "flex-end", gap: 10 }}>
        <Text style={{ fontSize: 16, alignSelf: "center" }}>IDR</Text>
        <TextInput style={{ flex: 1, fontSize: 36, height: 80 }}></TextInput>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 5, paddingVertical: 10 }}>
        <Text style={{ fontSize: 16, color: "#B3B3B3" }}>Balance</Text>
        <Text style={{ fontSize: 16, color: "#B3B3B3" }}>Rp. 100.000</Text>
      </View>
      </View>
      )
}

      export default CardAmount

      const styles = StyleSheet.create({ })