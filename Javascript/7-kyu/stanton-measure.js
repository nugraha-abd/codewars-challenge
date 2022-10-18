const stantonMeasure = (arr) =>
  arr.filter((n) => n === arr.filter((num) => num === 1).length).length
