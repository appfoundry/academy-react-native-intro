import React, { Component } from 'react'
import { Text } from 'react-native'

import ViewContainer from './ViewContainer'

import MainButton from '../components/MainButton'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  }

  constructor(props) {
    super(props)

    this.state = {
      users: ["Jef", "Jos", "Maria"]
    }
  }

  render() {
    const {users} = this.state
    const {navigation} = this.props
    return (
      <ViewContainer>
        <Text>
          Home Screen
        </Text>
        { this._renderProfileButtons(users) }
      </ViewContainer>
    )
  }

  _renderProfileButtons = (users) => {
    const userButtons = users.map((user, index) => {
      return (
        <MainButton key={index} 
                    onPress={ this._goToProfile(user) } 
                    label={`Go to ${user}'s profile!`} />
      )
    })
    return userButtons
  }

  _goToProfile = (name) => () => {
    this.props.navigation.navigate('Profile', {
      name
    })
  }
}

export default HomeScreen
