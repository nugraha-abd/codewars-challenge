function positiveSum(arr) {
  let sum = 0
  let posNumber = arr.filter((positive) => positive >= 0)
  posNumber.forEach((posNumber) => (sum += posNumber))

  return sum
}
