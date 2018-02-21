import React from 'react'
import { Platform, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import createStyleSheet from './utils/stylesheet'

import HomeScreen from './containers/HomeScreen'
import ProfileScreen from './containers/ProfileScreen'

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <RootStack/>
      </View>
    )
  }
}

const styles = createStyleSheet({
  container: {
    flex: 1,
    android: {
      paddingTop: Expo.Constants.statusBarHeight,
    },
  },
})

const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.name}'s Profile`,
    }),
  }
})

