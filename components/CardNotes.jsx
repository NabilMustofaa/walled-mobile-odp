import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const CardNotes = ({notes,setNotes}) => {
  return (
    <View style={{ backgroundColor: "white", marginVertical: 10, paddingHorizontal: 30, paddingVertical: 20, paddingTop: 10, justifyContent: "space-between" }}>
    <Text>Notes</Text>
    <TextInput
      multiline={true}
      numberOfLines={4}
      value={notes}
      onChangeText={setNotes}
    ></TextInput>
    <View style={{ borderBottomWidth: 1, borderColor: "#E1E1E1" }} />
  </View>
  )
}

export default CardNotes

const styles = StyleSheet.create({})