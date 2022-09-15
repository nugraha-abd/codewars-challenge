function arrAdder(arr) {
  let addArray = []

  for (i = 0; i < arr[0].length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[j][i] !== ' ') addArray.push(arr[j][i])
    }
    addArray.push(' ')
  }

  return addArray.join('').trimRight()
}
