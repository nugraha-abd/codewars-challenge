function bump(x) {
  return x.split('').filter((road) => road === 'n').length <= 15
    ? 'Woohoo!'
    : 'Car Dead'
}
