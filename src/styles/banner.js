import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  banner: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
  },
  added: {
    backgroundColor: 'green',
  },
  removed: {
    backgroundColor: 'red',
  },
  message: {
    color: 'white',
    fontSize: 24,
  },
  close: {
    color: 'white',
    fontSize: 16,
  },
})
