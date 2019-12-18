import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native'

import Tweet from '../components/Tweet'
import LabeledTextInput from '../components/LabeledTextInput'

import { launchImageLibraryAsync } from 'expo-image-picker'

class TweetEditor extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            handle: '',
            tweet: '',
            imageUri: ''
        }

    }

    render() {
        const { name, handle, tweet } = this.state

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={{ flex: 1 }}>
                        <Tweet
                            {...this.state}
                        />
                    </View>
                    <Button
                        title="Add Profile Picture"
                        onPress={() => {
                            launchImageLibraryAsync()
                                .then((imageResult) => {
                                    this.setState({ imageUri: imageResult.uri })
                                })
                        }}
                    />
                    <LabeledTextInput
                        label='Account Naam'
                        placeholder="Senne"
                        value={name}
                        onChangeText={(newValue) => {
                            this.setState({
                                name: newValue
                            })
                        }}
                    />
                    <LabeledTextInput
                        label='Account Handle'
                        value={handle}
                        placeholder="@sennevc"
                        onChangeText={(newValue) => {
                            this.setState({
                                handle: newValue
                            })
                        }}
                    />
                    <LabeledTextInput
                        label="Tweet"
                        placeholder=""
                        value={tweet}
                        onChangeText={(newValue) => {
                            this.setState({
                                tweet: newValue
                            })
                        }}
                    />
                </View>
            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey'
    }
})

export default TweetEditor