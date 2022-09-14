function hasUniqueChars(str) {
  return JSON.stringify(str.split('')) ===
    JSON.stringify([...new Set(str.split(''))])
    ? true
    : false
}
