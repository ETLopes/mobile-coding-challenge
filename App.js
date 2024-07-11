import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Menu from './src/screens/Menu'
import ShoppingCart from './src/screens/ShoppingCart'
import { RightHeader } from './src/components'
import CartContext from './src/context/cartContext'
import { SafeAreaView } from 'react-native'
const Stack = createStackNavigator()

export default function App() {
  const [cart, setCart] = useState([])
  const addItem = (item) => setCart([...cart, item])
  const removeItem = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.name === item.name)
    if (itemIndex !== -1) {
      const newCart = [...cart]
      newCart.splice(itemIndex, 1)
      setCart(newCart)
    }
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <CartContext.Provider value={{ cart, addItem, removeItem }}>
          <Stack.Navigator>
            <Stack.Screen
              name="Menu"
              initialParams={{ ready: true }}
              component={Menu}
              options={{
                headerRight: () => <RightHeader />,
                headerStyle: {
                  backgroundColor: 'white',
                },
              }}
            />
            <Stack.Screen
              name="ShoppingCart"
              component={ShoppingCart}
              initialParams={{ ready: true }}
              options={{
                headerStyle: {
                  backgroundColor: 'white',
                },
              }}
            />
          </Stack.Navigator>
        </CartContext.Provider>
      </SafeAreaView>
    </NavigationContainer>
  )
}
