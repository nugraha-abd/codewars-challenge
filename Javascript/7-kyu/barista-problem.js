function barista(coffees) {
  if (coffees.length < 1) return 0

  // Sort the coffee order by shortest brew time
  let sortByShortest = coffees.sort((a, b) => a - b)

  let total = sortByShortest[0]
  let waitTime = sortByShortest[0]

  const machineCleaning = 2

  for (i = 1; i < coffees.length; i++) {
    total += sortByShortest[i] + waitTime + machineCleaning
    waitTime += sortByShortest[i] + machineCleaning
  }

  return total
}
