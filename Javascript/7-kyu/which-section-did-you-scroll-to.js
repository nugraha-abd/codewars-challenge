function getSectionIdFromScroll(scrollY, sizes) {
  let newSection = 0

  let newSizes = sizes.map((section) => (newSection += section))

  for (i = 0; i < newSizes.length; i++) {
    if (scrollY < newSizes[i]) return i
  }

  return -1
}
