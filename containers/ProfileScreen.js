import React, { Component } from 'react'
import { Text } from 'react-native'

import ViewContainer from './ViewContainer'

import MainButton from '../components/MainButton'

class ProfileScreen extends Component {
  render() {
    const {navigation} = this.props
    return (
      <ViewContainer>
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