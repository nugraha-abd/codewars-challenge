function moveTen(s) {
  return s
    .split('')
    .map((char) => {
      let charCode = ((char.codePointAt() + 10 - 96) % 26) + 96
      if (charCode === 96) charCode = 122

      return String.fromCharCode(charCode)
    })
    .join('')
}
