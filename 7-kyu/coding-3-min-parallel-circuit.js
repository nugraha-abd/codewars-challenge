function resistance(arr) {
  return (
    (
      1 /
      arr
        .map((sum) => sum.reduce((a, b) => a + b))
        .reduce((a, b) => a + 1 / b, 0)
    ).toFixed(2) * 1
  )
}
