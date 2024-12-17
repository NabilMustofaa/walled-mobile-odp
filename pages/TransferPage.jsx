import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import CardAmount from '../components/CardAmount';
import CardNotes from '../components/CardNotes';
import { useAuth } from '../context/AuthContext';
import { addTransaction } from '../api/transactionApi';

const TransferPage = () => {
  const {userData} = useAuth();
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [to, setTo] = useState("");
  const handleTransfer = async () => {
    try {
      const transactionData = {
        type : "d",
        amount,
        description,
        from_to:to
      }
      console.log(userData,"ini data");
      const data = await addTransaction(transactionData)
      console.log(data);
      alert(data.message)
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: "space-between", paddingBottom: 20 }}>
      <View>
        <View style={{ backgroundColor: "#19918F", paddingHorizontal: 20, justifyContent: "space-between", flexDirection: "row", alignItems: "center",height: 60,width: "100%",marginBottom: 10 }}>
          <Text style={{ fontSize: 16, color: "#fff" }}>To:</Text>
          <View style={{ flex: 1 }}>
            <Picker style={{flex: 1,color: "#fff"}} selectedValue={to} onValueChange={(itemValue, itemIndex) => setTo(itemValue)}>
              <Picker.Item label="Syahdy" value="233486" />
              <Picker.Item label="Option 1" value="2" />
            </Picker>
          </View>

        </View>


        <CardAmount amount={amount} setAmount={setAmount} />


        <CardNotes notes={description} setNotes={setDescription} />
      </View>
      <TouchableOpacity
        style={[styles.button]}
        
        onPress={handleTransfer}
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