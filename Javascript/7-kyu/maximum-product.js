function adjacentElementsProduct(array) {
  return Math.max(
    ...array
      .map((num, i = 0, array) => num * array[i + 1])
      .filter((num) => Number.isInteger(num))
  )
}
