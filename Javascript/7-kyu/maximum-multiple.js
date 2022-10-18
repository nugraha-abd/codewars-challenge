function maxMultiple(divisor, bound) {
  for (i = bound; i > divisor; i--) {
    if (i % divisor == 0) return i
  }
}
