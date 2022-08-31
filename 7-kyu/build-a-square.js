function generateShape(integer) {
  let arr = []

  for (i = 0; i < integer; i++) {
    for (j = 0; j < integer; j++) {
      arr.push('+')
    }
    arr.push('\n')
  }

  return arr.join('').slice(0, -1)
}
