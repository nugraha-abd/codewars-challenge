function collatz(n) {
  let arr = [n]

  while (n !== 1) {
    if (n % 2 === 1) {
      n = 3 * n + 1
      arr.push(n)
    }
    if (n % 2 === 0) {
      n = n / 2
      arr.push(n)
    }
  }

  return arr.join('->')
}
