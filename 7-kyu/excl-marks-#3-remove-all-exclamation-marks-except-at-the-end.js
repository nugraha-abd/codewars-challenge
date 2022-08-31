function remove(string) {
  let exclamationEnd = []

  while (string[string.length - 1] == '!') {
    string = string.slice(0, -1)
    exclamationEnd.push('!')
  }

  return string.split('!').join('') + exclamationEnd.join('')
}
