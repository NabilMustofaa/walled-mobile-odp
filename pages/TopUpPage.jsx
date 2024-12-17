import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import CardAmount from '../components/CardAmount';
import CardNotes from '../components/CardNotes';
import { useAuth } from '../context/AuthContext';
import { addTransaction } from '../api/transactionApi';

const TopUpPage = () => {
  const {userData,fetchUser} = useAuth();
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const handleTopUp = async () => {
    
    try {
      const transactionData = {
        type : "c",
        amount,
        description,
        from_to:userData.account_no
      }
      console.log(userData,"ini data");
      const data = await addTransaction(transactionData)
      console.log(data);
      await fetchUser();
      alert(data.message)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "space-between", paddingBottom: 20 }}>
      <View>
        <CardAmount amount={amount} setAmount={setAmount} />

        <View style={{ backgroundColor: "white", marginVertical: 10, paddingHorizontal: 10 }}>

          <Picker

          >
            <Picker.Item label="Option 1" value="1" />
          </Picker>
        </View>
      <CardNotes notes={description} setNotes={setDescription}  />
      </View>
      <TouchableOpacity
        style={[styles.button]}
        onPress={handleTopUp}
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