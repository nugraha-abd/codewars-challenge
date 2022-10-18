function findNextPower(val, pow_) {
  for (i = 1; i < val; i++) {
    if (Math.pow(i, pow_) > val) return Math.pow(i, pow_)
    continue
  }

  return val
}
