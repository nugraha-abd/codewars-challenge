function abbrevName(name) {
  // convert name to array of chars
  let splitToArray = name.split('')

  // get index of second initial name
  let indexSecondInitialName = splitToArray.indexOf(' ')

  // return first and second initial name and convert to uppercase
  return (
    splitToArray[0] +
    '.' +
    splitToArray[indexSecondInitialName + 1]
  ).toUpperCase()
}
