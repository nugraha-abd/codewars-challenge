function isValidWalk(walk) {
  if (walk.length !== 10) return false

  let x = 0,
    y = 0

  walk.forEach((direction) => {
    if (direction === 'n') y += 1
    if (direction === 's') y -= 1
    if (direction === 'e') x += 1
    if (direction === 'w') x -= 1
  })

  return x === 0 && y === 0 ? true : false
}
