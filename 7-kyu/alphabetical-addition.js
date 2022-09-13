function addLetters(...letters) {
  let sum = 0

  for (i = 0; i < letters.length; i++) {
    sum += letters.join('').charCodeAt(i) - 96
  }

  if (sum > 26) sum = sum % 26
  if (sum % 26 === 0) sum = 26

  return String.fromCharCode(sum + 96)
}
