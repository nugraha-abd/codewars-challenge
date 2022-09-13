let collator = new Intl.Collator()

function last(x) {
  return x
    .split(' ')
    .sort((a, b) => collator.compare(a[a.length - 1], b[b.length - 1]))
}
