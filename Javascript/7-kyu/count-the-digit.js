function nbDig(n, d) {
  let result = []

  for (i = 0; i <= n; i++) {
    result.push(i * i)
  }

  return result.join('').split(d).length - 1
}
