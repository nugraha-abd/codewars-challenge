function findNextSquare(sq) {
  if (Math.sqrt(sq) % 1 !== 0) return -1

  for (i = 1; i < sq; i++) {
    if (Math.pow(i, 2) > sq) return Math.pow(i, 2)
  }
}
