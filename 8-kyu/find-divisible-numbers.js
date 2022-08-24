function divisibleBy(numbers, divisor) {
  // loop through array
  // check if numbers on the array is divisible
  // return the numbers as an array

  return numbers.filter((number) => number % divisor === 0)
}
