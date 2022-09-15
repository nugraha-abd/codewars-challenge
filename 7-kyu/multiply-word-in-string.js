function modifyMultiply(str, loc, num) {
  let arr = []

  for (i = 0; i < num; i++) {
    arr.push(`${str.split(' ')[loc]}`)
  }

  return arr.join('-')
}
