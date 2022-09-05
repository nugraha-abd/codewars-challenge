function switcheroo(x) {
  return x
    .split('')
    .map((x, i) => {
      if (x === 'a') return (x[i] = 'b')
      if (x === 'b') return (x[i] = 'a')
      return x
    })
    .join('')
}
