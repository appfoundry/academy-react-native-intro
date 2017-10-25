import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image, TouchableHighlight } from 'react-native'

class AvatarImage extends Component {
  render() {
    const {onAvatarPress, ...rest} = this.props
    return (
      <TouchableHighlight onPress={ onAvatarPress }
                          underlayColor="transparent">
        <Image style={ styles.image }
               {...rest} />
      </TouchableHighlight>
    )
  }
}

const styles = {
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginBottom: 40,
  }
}

AvatarImage.propTypes = {
  onAvatarPress: PropTypes.func,
}

AvatarImage.defaultProps = {
  onAvatarPress: () => {}
}

export default AvatarImage;