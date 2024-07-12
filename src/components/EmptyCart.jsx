import React from 'react'

import { Text } from 'react-native'

import { styles } from '../styles/shoppingCart'

export const EmptyCart = ({ navigation }) => {
  return (
    <>
      <Text style={styles.emptyCartTitle}>Your cart {'\n'} is empty :(</Text>
      <Text
        onPress={() => {
          navigation.navigate('Menu')
        }}
        style={styles.emptyCartSubtitle}
      >
        Click here to add items to your cart
      </Text>
    </>
  )
}
