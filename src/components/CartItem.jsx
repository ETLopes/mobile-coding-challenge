import React from 'react'

import { Text, View } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome'
import { styles } from '../styles/shoppingCart'

export const CartItem = ({ index, item, decreaseItemQuantity, addItem }) => {
  return (
    <View key={index} style={styles.cartItem}>
      <Text style={styles.cartItemText}>{item.name}</Text>
      <Text style={styles.cartItemQuantity}>Qty: {item.quantity}</Text>
      <Text style={styles.cartItemPrice}>${item.price}</Text>
      <Text style={styles.cartItemTotal}>Total: ${(item.price * item.quantity).toFixed(2)}</Text>
      <View style={styles.cartItemActions}>
        <Text
          onPress={() => {
            addItem(item)
          }}
          style={styles.cartItemActionText}
        >
          <Icon name="plus-circle" size={24} color="green" />
        </Text>
        <Text
          onPress={() => {
            decreaseItemQuantity(item)
          }}
          style={styles.cartItemActionTextRed}
        >
          <Icon name="minus-circle" size={24} color="red" />
        </Text>
      </View>
    </View>
  )
}
