export const cartWithQuantity = (cart) => {
  const itemMap = new Map()

  cart.map((item) => {
    if (itemMap.has(item.id)) {
      itemMap.get(item.id).quantity += 1
    } else {
      itemMap.set(item.id, { ...item, quantity: 1 })
    }
  })

  return Array.from(itemMap.values())
}
