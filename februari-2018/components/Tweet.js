import React from 'react'
import { View, Text, TextInput, StyleSheet, Image } from 'react-native'



export default class Tweet extends React.Component {
  render() {
    const {name, tweet, handle, image} = this.props

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={{uri: image ? image : 'https://assets1.cdn-mw.com/mw/images/article/art-wap-landing-mp-lg/egg-3442-4c317615ec1fd800728672f2c168aca5@1x.jpg'}}
          />
          <View style={styles.headerText}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.handle}>{handle}</Text>
          </View>
        </View>
        <Text style={styles.tweet}>{tweet}</Text>
        <Text style={styles.dateTime}t>10pm - 16 feb 2018</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  headerText: {
    flexDirection: 'column'
  },
  name: {
    fontWeight: 'bold'
  },
  handle: {
    color: 'grey'
  },
  tweet: {
    fontSize: 20,
    paddingBottom: 10
  },
  dateTime: {
    fontSize: 10,
    color: 'gray'
  }
})