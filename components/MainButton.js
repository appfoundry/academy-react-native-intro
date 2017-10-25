import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Text, TouchableHighlight } from 'react-native'
import createStyleSheet from '../utils/stylesheet'

// we call this 'MainButton' to make a distinction from React Native's 'Button'
class MainButton extends Component {
  render() {
    const {label, ...rest} = this.props

    return (
      <TouchableHighlight style={ styles.buttonStyle }
                          {...rest}>
        <Text style={ styles.buttonText}>
          { label }
        </Text>
      </TouchableHighlight>
      );
  }
}

const styles = createStyleSheet({
  buttonStyle: {
    android: {
      backgroundColor: "#2196F3",
    },
    ios: {
      backgroundColor: '#eee',
    },
    alignItems: 'center',
    marginTop: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    android: {
      color: 'white',
      fontWeight: 'bold'
    },
    ios: {
      color: 'black'
    }
  }
})


MainButton.propTypes = {
  label: PropTypes.string.isRequired,
}


export default MainButton;