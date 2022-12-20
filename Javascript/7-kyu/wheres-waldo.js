function findWaldo(crowd) {
  let splitArray = crowd.map((object) => [...object])

  let waldo = []

  // Find unique value from the crowd array and insert the value to waldo variable
  for (let i = 0; i < splitArray.join('').length; i++) {
    if (
      splitArray.join('').lastIndexOf(splitArray.join('')[i]) ===
      splitArray.join('').indexOf(splitArray.join('')[i])
    ) {
      waldo.push(splitArray.join('')[i])
    }
  }

  return splitArray
    .map((crowd, i) => {
      if (crowd.indexOf(waldo.toString()) > 0)
        return [i, crowd.indexOf(waldo.toString())]
    })
    .filter((item) => item)
    .flat()
}
