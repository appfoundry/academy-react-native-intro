import { StackNavigator } from 'react-navigation'
import HomeScreen from './containers/HomeScreen'
import DetailScreen from './containers/DetailScreen'

export default StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detail: {
    screen: DetailScreen
  }
})