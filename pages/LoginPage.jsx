import { Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { TextInput } from 'react-native'
import FormInput from '../components/FormInput'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../context/AuthContext'
import { loginUser } from '../api/authApi'


const adaptiveIcon = require("../assets/adaptive-icon.png");
const LoginPage = () => {
  const {login} = useAuth();
  const navigation = useNavigation();
  const handleLogin = async ({email, password}) => {
    try {
      const userData = {
        email,
        password
      } 
      console.log(userData,"ini data");
      const data = await loginUser(userData)
      console.log(data);
      alert(data.message)
      login(data.data.token)


    } catch (error) {
      console.error(error);
      alert(error.message)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex:1 }}>
      <StatusBar style="light" />
     
      <FormInput state="login" handleForm={handleLogin} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginPage

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