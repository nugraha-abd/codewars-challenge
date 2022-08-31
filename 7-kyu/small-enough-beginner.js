function smallEnough(a, limit) {
  return a.filter((val) => val > limit).length == 0 ? true : false
}
