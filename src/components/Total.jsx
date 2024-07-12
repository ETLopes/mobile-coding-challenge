import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../styles/shoppingCart'

export const Total = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0)
  return (
    <View style={styles.totalBody}>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
      </View>
    </View>
  )
}
