import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default class FieldItem extends React.Component {
  render() {
    const {label, placeholder, value, onChangeText} = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          placeholder={placeholder}
          style={styles.inputField}
          value={value}
          onChangeText={onChangeText}
          underlineColorAndroid='transparent'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    flexDirection: 'row'
  },
  label: {
    flex: 1
  },
  inputField: {
    flex: 2
  }
})