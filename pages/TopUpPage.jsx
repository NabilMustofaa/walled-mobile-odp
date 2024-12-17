import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker';
import CardAmount from '../components/CardAmount';
import CardNotes from '../components/CardNotes';

const TopUpPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "space-between", paddingBottom: 20 }}>
      <View>
        <CardAmount />

        <View style={{ backgroundColor: "white", marginVertical: 10, paddingHorizontal: 10 }}>

          <Picker

          >
            <Picker.Item label="Option 1" value="1" />
          </Picker>
        </View>
      <CardNotes />
      </View>
      <TouchableOpacity
        style={[styles.button]}
      >
        <Text style={styles.buttonText}>Top Up</Text>
      </TouchableOpacity>
    </View >
  )
}

export default TopUpPage

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