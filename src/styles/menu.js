import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  menuItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  menuItemText: {
    fontSize: 28,
    marginVertical: 10,
  },
  menuItemPrice: {
    fontSize: 28,
    marginVertical: 10,
  },
})
