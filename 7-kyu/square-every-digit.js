function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split('')
      .map((num) => Math.pow(num, 2))
      .join('')
  )
}
