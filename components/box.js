import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const box = ({children,style}) => {
  return (
    <View style={[styles.box,style]} >
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'dodgerblue',
    padding: 20,
    margin: 20
  },
  text : {
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  }
})

export default box