function maxIntChain(n) {
  return n < 5 ? -1 : Math.floor(n / 2 + 1) * Math.ceil(n / 2 - 1)
}
