function inAscOrder(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return false
    continue
  }

  return true
}
