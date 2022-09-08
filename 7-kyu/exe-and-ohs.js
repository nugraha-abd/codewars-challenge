function XO(str) {
  if (str.includes('x') == -1 || str.includes('o') == -1) return false

  if (str.includes('x') == -1 && str.includes('o') == -1) return true

  if (
    str.split('x').length - 1 + str.split('X').length - 1 ==
    str.split('o').length - 1 + str.split('O').length - 1
  )
    return true

  return false
}
