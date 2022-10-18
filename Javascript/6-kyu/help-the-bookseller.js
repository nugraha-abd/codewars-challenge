function stockList(listOfArt, listOfCat) {
  const initial = listOfArt
    .map((code) => code.split(' ')[0].slice(0, 1))
    .sort((a, b) => a - b)
  const stock = listOfArt.map((code) => parseInt(code.split(' ')[1]))

  const bookStock = {}

  initial.forEach((code, i) => {
    if (bookStock.hasOwnProperty(code)) {
      bookStock[code] += stock[i]
    } else {
      bookStock[code] = stock[i]
    }
  })

  if (Object.values(bookStock).length > 0) {
    return listOfCat
      .map((code) => {
        return `(${code} : ${bookStock[code] || 0})`
      })
      .join(' - ')
  }

  return ''
}
