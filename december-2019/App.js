import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './containers/Home'
import TweetEditor from './containers/TweetEditor'
import TweetEditorHooks from './containers/TweetEditorHooks'

const AppNavigator = createStackNavigator({
  home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  tweetEditor: {
    screen: TweetEditorHooks,
    navigationOptions: {
      headerTitle: 'New Tweet'
    }
  }
}
)

export default createAppContainer(AppNavigator)