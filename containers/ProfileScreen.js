import React, { Component } from 'react'
import { Text } from 'react-native'
import { ImagePicker } from 'expo'

import ViewContainer from './ViewContainer'

import MainButton from '../components/MainButton'
import AvatarImage from '../components/AvatarImage'

class ProfileScreen extends Component {
  constructor(props) {
    super(props)

    // this will reset every time the profile screen is used,
    // if we would want to keep it, we'd have to implement some kind of storage (for example: React Native's AsyncStorage)
    this.state = {
      avatarSource: null
    }
  }

  render() {
    const {navigation} = this.props
    const { avatarSource } = this.state
    // check if a new avatar has been chosen, if not, use placeholder from assets
    const avatarToShow = avatarSource ? { uri: avatarSource } : require('../assets/images/avatar.jpg')

    return (
      <ViewContainer>
        <AvatarImage onAvatarPress={ this._takeNewPicture }
                     source={avatarToShow} />
        <Text>
          { `Profile Screen of ${navigation.state.params.name}.` }
        </Text>
        <MainButton onPress={ this._buttonPress }
                    label="Go back!" />
      </ViewContainer>
    )
  }
  
  _takeNewPicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    })

    console.log(result);

    if (!result.cancelled) {
      this.setState({
        avatarSource: result.uri
      })
    }
  }

  _buttonPress = () => {
    this.props.navigation.goBack()
  }
}

export default ProfileScreen