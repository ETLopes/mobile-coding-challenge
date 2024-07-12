import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  shoppingCartContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  cartItemsContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  cartItemsHeader: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  cardItemsHeaderText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItemText: {
    fontSize: 16,
    flexWrap: 'wrap',
    flex: 1,
    fontWeight: 'bold',
  },
  cartItemQuantity: {
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
  cartItemPrice: {
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
  cartItemTotal: {
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  cartItemActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartItemActionText: {
    color: 'green',
    marginRight: 10,
  },
  cartItemActionTextRed: {
    color: 'red',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: 'black',
    backgroundColor: 'white',
  },
  totalText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  emptyCartTitle: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
  },
  emptyCartSubtitle: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  totalBody: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
})
