function removeSmallest(numbers) {
  if (numbers.length === 0 || numbers.length === 1) return []

  let indexOfMin = numbers.indexOf(Math.min(...numbers))

  return [
    ...numbers.slice(0, indexOfMin),
    ...numbers.slice(indexOfMin + 1, numbers.length),
  ]
}
