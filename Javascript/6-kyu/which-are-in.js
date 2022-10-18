function inArray(substr, str) {
  let result = []

  // Check how many times a substring has appeared
  substr.map((word) => {
    for (i = 0; i < str.length; i++) {
      if (str[i].includes(word)) result.push(word)
    }
  })

  // Remove duplicate substring and sort by alphabetical order
  return [...new Set(result.sort())]
}
