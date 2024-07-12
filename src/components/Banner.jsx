import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome'
import { styles } from '../styles/banner'

export const Banner = ({ message, onClose, type }) => {
  const backgroundColor = type === 'added' ? styles.added : styles.removed
  return (
    <View style={{ ...styles.banner, ...backgroundColor }}>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity onPress={onClose}>
        <Icon name="close" size={28} color="white" style={styles.close} />
      </TouchableOpacity>
    </View>
  )
}
