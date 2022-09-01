function factorial(n) {
  if (n < 0 || n > 12) throw 'RangeError'

  if (n == 0 || n == 1) return 1

  let arr = []

  for (i = n; i > 0; i--) {
    arr.push(i)
  }

  return arr.reduce((a, b) => a * b)
}
