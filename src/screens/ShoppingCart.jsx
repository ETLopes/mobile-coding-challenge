import React, { useContext } from 'react'

import { View, Text } from 'react-native'
import CartContext from '../context/cartContext'
import { cartWithQuantity } from '../utils/index'
import { CartItem, EmptyCart, Total } from '../components'
import { styles } from '../styles/shoppingCart'
import { useNavigation } from '@react-navigation/native'

const ShoppingCart = () => {
  const navigation = useNavigation()
  const { cart, removeItem, addItem } = useContext(CartContext)

  const decreaseItemQuantity = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id)
    if (itemIndex !== -1) {
      removeItem(item)
    }
  }

  const cartItems = cartWithQuantity(cart)

  return (
    <View style={styles.shoppingCartContainer}>
      {cartItems.length === 0 ? (
        <EmptyCart navigation={navigation} />
      ) : (
        <>
          <View style={styles.cartItemsHeader}>
            <Text style={styles.cardItemsHeaderText}>Your Items</Text>
          </View>
          <View style={styles.cartItemsContainer}>
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                decreaseItemQuantity={decreaseItemQuantity}
                addItem={addItem}
              />
            ))}
          </View>
          <Total cart={cart} />
        </>
      )}
    </View>
  )
}

export default ShoppingCart
