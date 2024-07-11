import React from 'react'

import { ScrollView, Text, View } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome'
import { styles } from '../styles/menu'

export const MenuItem = ({ item, addItem }) => {
  return (
    <ScrollView contentContainerStyle={styles.menuItemContainer}>
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>{item.name}</Text>
        <Text style={styles.menuItemPrice}>
          {item.price}{' '}
          <Icon
            onPress={() => {
              addItem(item)
            }}
            name="plus-circle"
            size={24}
            color="green"
          />
        </Text>
      </View>
    </ScrollView>
  )
}
