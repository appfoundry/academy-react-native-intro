import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

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
      <View>
        <Text>
          Home Screen
        </Text>
        { this._renderProfileButtons(users) }
      </View>
    )
  }

  _renderProfileButtons = (users) => {
    const userButtons = users.map((user, index) => {
      return (
        <Button key={ index }
                onPress={ this._goToProfile(user) }
                title={ `Go to ${user}'s profile!` } />
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
