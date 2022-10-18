function findUniq(arr) {
  return arr.filter((e) => arr.lastIndexOf(e) == arr.indexOf(e)) * 1
}
