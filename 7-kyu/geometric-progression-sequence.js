function geometricSequenceElements(a, r, n) {
  let arr = []

  let geoNumber = 0

  for (i = 0; i < n; i++) {
    i === 0 ? (geoNumber = a) : (geoNumber = geoNumber * r)
    arr.push(geoNumber)
  }

  return arr.join(', ')
}
