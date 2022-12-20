function newAvg(arr, newavg) {
  if (newavg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0) <= 0) {
    throw new Error('Expected New Average is too low')
  }

  return Math.ceil(newavg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0))
}
