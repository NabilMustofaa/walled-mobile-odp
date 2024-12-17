import { Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { TextInput } from 'react-native'
import FormInput from '../components/FormInput'
import { register } from '../api/authApi'
import { useNavigation } from '@react-navigation/native'

const adaptiveIcon = require("../assets/adaptive-icon.png");
const RegisterPage = () => {
  const navigatation = useNavigation();
  const handleRegister =  async({fullname, email, password, phone}) => {
    try {
      const newUser ={
        full_name: fullname,
        email,
        password,
        phone_number: phone
      }
      console.log(newUser);
      const data = await register(newUser)
      alert(data.message)
      // navigatation.navigate("Login")



    } catch (error) {
      
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex:1 }}>
      <StatusBar style="light" />
     
      <FormInput state="register" handleForm={handleRegister} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RegisterPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    padding: 20,
    paddingBottom: 120,
    paddingTop: 80,
    justifyContent: 'space-between'
  },



});