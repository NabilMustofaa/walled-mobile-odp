import { Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { CheckBox } from 'react-native-web';
import Ionicons from "@expo/vector-icons/Ionicons";
import {useForm, Controller} from 'react-hook-form'
import ModalComp from './Modal';
const logo = require("../assets/logo.png");

const FormInput = ({ state,handleForm }) => {
  const {
    control,
    handleSubmit,
    formState: {errors}
  } = useForm({mode: 'onBlur'})

  const onSubmit = data => {
    console.log(data)
    handleForm({
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      phone: data.phone
    })
  }

  const [tncChecked, setTncChecked] = useState(false);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
    <ModalComp modalVisible={modalVisible} setModalVisible={setModalVisible} handleClose={() => setTncChecked(true)} />
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      
      <Image source={logo} style={{ height: 57, alignSelf: 'center', marginBottom: 20, objectFit: "contain" }} />
      
      <View style={{ gap: 20 }}>
        {state === 'register' && (
          <Controller
            control={control}
            name="fullname"
            rules={{
              required: 'Nama lengkap wajib diisi'
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <TextInput 
                  placeholder='Fullname'
                  onChangeText={onChange}
                  value={value}
                  style={[styles.input, errors.fullname && styles.errorInput]}
                />
                {errors.fullname && <Text style={styles.errorText}>{errors.fullname.message}</Text>}
              </>
            )}
          />
        )}

        <Controller
          control={control}
          name="email"
          rules={{
            required: 'Email wajib diisi',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Format email tidak valid',
            }
          }}
          render={({ field: { onChange, value } }) => (
            <>
              <TextInput
                placeholder='Email'
                onChangeText={onChange}
                value={value}
                style={[styles.input, errors.email && styles.errorInput]}
              />
              {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
            </>
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Password wajib diisi',
            minLength: {
              value: 6,
              message: 'Password minimal 6 karakter'
            }
          }}
          render={({ field: { onChange, value } }) => (
            <>
              <TextInput
                placeholder='Password'
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}
                style={[styles.input, errors.password && styles.errorInput]}
                autoCapitalize='none'
              />
              {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
            </>
          )}
        />

        {state === 'register' && (
          <Controller
            control={control}
            name="phone"
            rules={{
              required: 'Nomor telepon wajib diisi',
              pattern: {
                value: /^[0-9]{10,13}$/,
                message: 'Nomor telepon tidak valid'
              }
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <TextInput
                  placeholder='Phone'
                  onChangeText={onChange}
                  value={value}
                  style={[styles.input, errors.phone && styles.errorInput]}
                  keyboardType="numeric"
                />
                {errors.phone && <Text style={styles.errorText}>{errors.phone.message}</Text>}
              </>
            )}
          />
        )}
      </View>

      <View style={{ marginTop: 20, gap:5 }}>
        {state === 'register' && (
          <View style={styles.checkboxContainer}>
            <TouchableOpacity 
              onPress={() => setTncChecked(!tncChecked)} 
              style={{
                width: 20,
                height: 20,
                borderRadius: 5,
                backgroundColor: tncChecked ? "#19918F" : "#FAFBFD",
              }}
            >
              <Ionicons name={tncChecked ? "checkmark" : "square-outline"} size={20} color={tncChecked ? "white" : "#19918F"} />
            </TouchableOpacity>
            <View style={[styles.textContainer]}>
              <Text>I have read and agree to the</Text>
              <Pressable onPress={() => setModalVisible(true)}><Text style={styles.textAqua}>Terms and Conditions</Text></Pressable>
            </View>
          </View>
        )}

        <TouchableOpacity 
          style={[styles.button, !tncChecked && state === 'register' && styles.disabledButton]} 
          onPress={handleSubmit(onSubmit)}
          disabled={state === 'register' && !tncChecked}
        >
          <Text style={styles.buttonText}>{state === 'register' ? 'Register' : 'Login'}</Text>
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text>Don't have account?</Text>
          <Pressable onPress={() => navigation.navigate(state === 'register' ? 'Login' : 'Register')} >
            <Text style={styles.textAqua}>{state === 'register' ? 'Login here' : 'Register here'}</Text>
          </Pressable>
        </View>
      </View>
    </View></>
  )
}

export default FormInput

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FAFBFD',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    color: 'black',
    fontWeight: 'semibold',
    elevation: 3
  },
  errorInput: {
    borderColor: 'red',
    borderWidth: 1
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: -15
  },
  button: {
    backgroundColor: '#19918F',
    padding: 15,
    borderRadius: 10,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  },
  textAqua: {
    color: '#19918F'
  },
  checkbox: {
    alignSelf: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5
  },
  textContainer: {flexDirection: 'row', gap: 5, alignItems: 'center'}
})