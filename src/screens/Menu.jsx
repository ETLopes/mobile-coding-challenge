import React, { useContext } from 'react'

import { ScrollView } from 'react-native'
import { menuItems } from '../data/menu'
import { MenuItem } from '../components'
import { styles } from '../styles/menu'
import CartContext from '../context/cartContext'

const Menu = () => {
  const { addItem } = useContext(CartContext)
  return (
    <ScrollView style={styles.scrollView}>
      {menuItems.map((item, index) => (
        <MenuItem key={index} item={item} addItem={addItem} />
      ))}
    </ScrollView>
  )
}

export default Menu
