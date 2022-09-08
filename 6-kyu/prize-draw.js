function rank(st, we, n) {
  if (st === '') return 'No participants'
  if (n > st.split(',').length) return 'Not enough participants'

  // Split the participant names into the array
  let names = st.split(',')

  // Count the points for every participants
  let winningNumber = names.map((name, idx) => {
    let som = 0

    for (i = 0; i < name.length; i++) {
      som += name.toLowerCase().charCodeAt(i) - 96
    }

    return [names[idx], (som + name.length) * we[idx]]
  })

  // Sort the point by descending order
  winningNumber.sort((a, b) => {
    if (b[1] === a[1]) {
      return a[0].localeCompare(b[0])
    }
    return b[1] - a[1]
  })

  return winningNumber[n - 1][0]
}
