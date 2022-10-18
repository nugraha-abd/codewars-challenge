function firstNonConsecutive(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] > 1) return arr[i]
  }

  return arr.length <= 1 ? null : null
}
