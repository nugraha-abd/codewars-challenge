function removeRotten(bagOfFruits) {
  if (bagOfFruits === null || bagOfFruits === undefined) return []

  return bagOfFruits.map((fruit) => {
    if (fruit.substring(0, 6) === 'rotten') fruit = fruit.slice(6).toLowerCase()

    return fruit
  })
}
