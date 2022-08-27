String.prototype.isUpperCase = function () {
  return JSON.stringify(this) === JSON.stringify(this).toUpperCase()
    ? true
    : false
}
