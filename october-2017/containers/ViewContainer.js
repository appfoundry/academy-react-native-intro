import React, { Component } from 'react'
import { View } from 'react-native'

import createStyleSheet from '../utils/stylesheet'

class ViewContainer extends Component {
  render() {
    return (
      <View style={ styles.container }>
        { this.props.children }
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
    },
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ViewContainer;