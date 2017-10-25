import React from 'react'
import { Platform, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import { onAndroid } from './utils/general'
import createStyleSheet from './utils/stylesheet'

import HomeScreen from './containers/HomeScreen'
import ProfileScreen from './containers/ProfileScreen'

export default class App extends React.Component {
  render() {
    return (
      <View style={ [styles.container, { paddingTop: !onAndroid() ? 0 : Expo.Constants.statusBarHeight }] }>
        <RootStack/>
      </View>
    )
  }
}

const styles = createStyleSheet({
  container: {
    flex: 1,
    android: {
      backgroundColor: '#eee',
    },
    ios: {
      backgroundColor: '#fff'
    }
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

