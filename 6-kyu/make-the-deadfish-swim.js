function parse(data) {
  let output = []
  let n = 0

  data.split('').forEach((char) => {
    if (char === 'i') n += 1
    if (char === 'd') n -= 1
    if (char === 's') n *= n
    if (char === 'o') output.push(n)
  })

  return output
}
