import React, { useState, useEffect, use } from 'react'
import { View, StyleSheet, SafeAreaView, Button } from 'react-native'

import { launchImageLibraryAsync } from 'expo-image-picker'

import Tweet from '../components/Tweet'
import LabeledTextInput from '../components/LabeledTextInput'

const TweetEditorHooks = () => {




    const [name, setName] = useState('senne')
    const [handle, setHandle] = useState('')
    const [tweet, setTweet] = useState('')
    const [imageUri, setImageUri] = useState('')


    useEffect(() => {
        alert('hallo' + name)

        return () => {
            alert('goodbye')
        }
    }, [name])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Tweet
                        name={name}
                        handle={handle}
                        tweet={tweet}
                        imageUri={imageUri}
                    />
                </View>
                <View></View>
                <Button
                    title="Add Profile Picture"
                    onPress={() => {
                        launchImageLibraryAsync()
                            .then((imageResult) => {
                                setImageUri(imageResult.uri)
                            })
                    }}
                />
                <LabeledTextInput
                    label='Account Naam'
                    placeholder="Senne"
                    value={name}
                    onChangeText={(newValue) => {
                        setName(newValue)
                    }}
                />
                <LabeledTextInput
                    label='Account Handle'
                    value={handle}
                    placeholder="@sennevc"
                    onChangeText={(newValue) => {
                        setHandle(newValue)
                    }}
                />
                <LabeledTextInput
                    label="Tweet"
                    placeholder=""
                    value={tweet}
                    onChangeText={(newValue) => {
                        setTweet(newValue)
                    }}
                />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey'
    }
})

export default TweetEditorHooks