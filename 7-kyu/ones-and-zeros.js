const binaryArrayToNumber = (arr) => {
  return arr
    .reverse()
    .map((binary, i) => binary * Math.pow(2, i))
    .reduce((a, b) => a + b)
}
