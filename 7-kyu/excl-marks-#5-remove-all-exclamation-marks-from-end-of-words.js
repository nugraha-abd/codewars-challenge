function remove(string) {
  // for one word
  if (string.indexOf(' ') == -1) {
    while (string[string.length - 1] === '!') {
      string = string.slice(0, -1)
    }
    return string
  }

  // for more than one words
  let arr = []
  string.split(' ').map((str) => {
    while (str[str.length - 1] === '!') {
      str = str.slice(0, -1)
    }
    arr.push(str)
  })
  return arr.join(' ')
}
