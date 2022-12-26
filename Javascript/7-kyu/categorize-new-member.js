function openOrSenior(data) {
  let membership = []

  data.forEach((data, i) => {
    if (data[0] >= 55 && data[1] > 7) {
      membership.push('Senior')
    } else {
      membership.push('Open')
    }
  })

  return membership
}
