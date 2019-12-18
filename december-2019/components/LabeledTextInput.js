import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

class LabeledTextInput extends React.Component {

    render() {
        const { label, value, onChangeText, placeholder } = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter nAme'
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
        flexDirection: 'row',
        borderColor: 'lightgrey',
        borderTopWidth: 1
    },
    label: {
        flex: 1
    },
    textInput: {
        flex: 2
    }
})

export default LabeledTextInput