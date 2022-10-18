function billboard(name, price = 30) {
  // count string length
  // multiply string length

  let totalCost = 0

  name.split('').forEach((letter) => (totalCost += price))

  return totalCost
}
