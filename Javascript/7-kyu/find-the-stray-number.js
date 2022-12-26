function stray(numbers) {
  let uniqueNumber = []

  for (let i = 0; i < numbers.length; i++) {
    if (numbers.lastIndexOf(numbers[i]) === numbers.indexOf(numbers[i])) {
      uniqueNumber.push(numbers[i])
    }
  }

  return Number(uniqueNumber)
}
