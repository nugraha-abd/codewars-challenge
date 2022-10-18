function toAcronym(inp) {
  let acronym = []

  inp.split(' ').forEach((word) => {
    acronym.push(word.split('').shift().toUpperCase())
  })

  return acronym.join('')
}
