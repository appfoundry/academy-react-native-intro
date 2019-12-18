import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import Colors from '../utils/Colors'

const Tweet = ({ name, handle, tweet, imageUri, style }) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.header}>
                <Image
                    style={styles.image}
                    source={{
                        uri: imageUri ? imageUri : 'https://cms.qz.com/wp-content/uploads/2017/03/twitter_egg_blue.png'
                    }}
                />
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.handle}>{handle}</Text>
                </View>
            </View>
            <Text>{tweet}</Text>
            <Text style={styles.extraInfo}>extra info</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15
    },
    name: {
        fontWeight: 'bold'
    },
    handle: {
        color: Colors.GreyText
    },
    extraInfo: {
        color: Colors.GreyText,
        fontSize: 10,
        marginTop: 5
    }
})

export default Tweet