import React, { Component } from 'react'
import { Button, View, Text } from 'react-native'

import ViewContainer from './ViewContainer'

class ProfileScreen extends Component {
  render() {
    const {navigation} = this.props
    return (
      <ViewContainer>
        <Text>
          { `Profile Screen of ${navigation.state.params.name}.` }
        </Text>
        <Button onPress={ this._buttonPress }
                title="Go back!" />
      </View>
      </ViewContainer>
    )
  }

  _buttonPress = () => {
    this.props.navigation.goBack()
  }
}

export default ProfileScreen