function splitTheBill(x) {
  const avgBill =
    Object.values(x).reduce((a, b) => a + b) / Object.keys(x).length

  Object.entries(x).forEach(([personName, bill]) => {
    x[personName] = Math.round((bill - avgBill) * 100) / 100
  })

  return x
}
