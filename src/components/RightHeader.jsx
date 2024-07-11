import React from 'react'

import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export const RightHeader = () => {
  const { navigate } = useNavigation()
  return (
    <Pressable
      onPress={() => {
        navigate('ShoppingCart')
      }}
      title="Info"
      color="#000"
      style={{ marginRight: 20 }}
    >
      <FontAwesome name="shopping-cart" size={24} color="blue" />
    </Pressable>
  )
}
