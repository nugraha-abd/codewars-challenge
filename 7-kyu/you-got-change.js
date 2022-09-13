function giveChange(amount) {
  let bills = [0, 0, 0, 0, 0, 0]

  while (amount !== 0) {
    if (amount - 100 >= 0) {
      amount -= 100
      bills[5]++
      continue
    }
    if (amount - 50 >= 0) {
      amount -= 50
      bills[4]++
      continue
    }
    if (amount - 20 >= 0) {
      amount -= 20
      bills[3]++
      continue
    }
    if (amount - 10 >= 0) {
      amount -= 10
      bills[2]++
      continue
    }
    if (amount - 5 >= 0) {
      amount -= 5
      bills[1]++
      continue
    }
    if (amount - 1 >= 0) {
      amount -= 1
      bills[0]++
      continue
    }
  }

  return bills
}
