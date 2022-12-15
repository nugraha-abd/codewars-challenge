function none(arr, fun) {
  if (arr.length == 0) return true

  const checkArr = arr.map(fun)

  return checkArr.find((res) => res == true) ? false : true
}
