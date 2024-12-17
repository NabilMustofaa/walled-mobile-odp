import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker';
import CardAmount from '../components/CardAmount';
import CardNotes from '../components/CardNotes';

const TransferPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "space-between", paddingBottom: 20 }}>
      <View>
        <View style={{ backgroundColor: "#19918F", paddingHorizontal: 20, justifyContent: "space-between", flexDirection: "row", alignItems: "center",height: 60,width: "100%",marginBottom: 10 }}>
          <Text style={{ fontSize: 16, color: "#fff" }}>To:</Text>
          <View style={{ flex: 1 }}>
            <Picker style={{flex: 1,color: "#fff"}} itemStyle>
              <Picker.Item label="Option 1" value="1" />
              <Picker.Item label="Option 1" value="2" />
            </Picker>
          </View>

        </View>


        <CardAmount />


        <CardNotes />
      </View>
      <TouchableOpacity
        style={[styles.button]}
      >
        <Text style={styles.buttonText}>Transfer</Text>
      </TouchableOpacity>
    </View >
  )
}

export default TransferPage

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#19918F',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,

  },
})