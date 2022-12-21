function getCount(str) {
  return str.split('').filter((char) => {
    return (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    )
  }).length
}
