import React, { useState, useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Menu from './src/screens/Menu'
import ShoppingCart from './src/screens/ShoppingCart'
import { RightHeader, Banner } from './src/components'
import CartContext from './src/context/cartContext'
import { SafeAreaView } from 'react-native'

const Stack = createStackNavigator()

export default function App() {
  const [cart, setCart] = useState([])
  const [alert, setAlert] = useState({ show: false, message: '', type: '' })
  const timeoutRef = useRef(null)

  const showAlert = (message, type) => {
    setAlert({ show: true, message, type: type })
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => setAlert({ show: false, message: '' }), 3000) // Hide after 3 seconds
  }

  const addItem = (item) => {
    setCart([...cart, item])
    showAlert(`${item.name} added to cart`, 'added')
  }

  const removeItem = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.name === item.name)
    if (itemIndex !== -1) {
      const newCart = [...cart]
      newCart.splice(itemIndex, 1)
      setCart(newCart)
      showAlert(`${item.name} removed from cart`, 'removed')
    }
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        {alert.show && (
          <Banner
            message={alert.message}
            onClose={() => setAlert({ show: false, message: '' })}
            type={alert.type}
          />
        )}
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
