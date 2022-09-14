function oddOrEven(array) {
  return array.reduce((a, b) => Math.abs(a) + Math.abs(b), 0) % 2 === 0
    ? 'even'
    : 'odd'
}
