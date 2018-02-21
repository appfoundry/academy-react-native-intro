import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

import { ImagePicker } from 'expo'

import FieldItem from '../components/FieldItem'
import Tweet from '../components/Tweet'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Details'
  }

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      handle: '',
      tweet: '',
      image: null
    }
  }

  render() {
    const {name, handle, tweet} = this.state

    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Tweet {...this.state} />
        </View>
        <FieldItem
          label='Account Name'
          placeholder='Donald Trump'
          value={name}
          onChangeText={newValue => this.setState({name: newValue})}/>
        <FieldItem
          label='Account Handle'
          placeholder='@donald'
          value={handle}
          onChangeText={newValue => this.setState({handle: newValue})}/>
        <FieldItem
          label='Tweet'
          value={tweet}
          onChangeText={newValue => this.setState({tweet: newValue})}/>
        <Button
          title='Chose profile picture'
          onPress={this._pickImage}
        />
      </View>
    )
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
