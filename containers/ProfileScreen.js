import React, { Component } from 'react'
import { Text } from 'react-native'

import ViewContainer from './ViewContainer'

import MainButton from '../components/MainButton'
import AvatarImage from '../components/AvatarImage'

class ProfileScreen extends Component {
  render() {
    const {navigation} = this.props
    return (
      <ViewContainer>
        <AvatarImage onAvatarPress={ this._takeNewPicture }
                     source={ require('../assets/images/avatar.jpg') } />
        <Text>
          { `Profile Screen of ${navigation.state.params.name}.` }
        </Text>
        <MainButton onPress={ this._buttonPress }
                    label="Go back!" />
      </ViewContainer>
    )
  }

  _buttonPress = () => {
    this.props.navigation.goBack()
  }
}

export default ProfileScreen