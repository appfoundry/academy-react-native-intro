'use strict'

import { Platform } from 'react-native'
import { NavigationActions } from 'react-navigation'

// Simple Platform boolean
export const onAndroid = () => Platform.OS === 'android'