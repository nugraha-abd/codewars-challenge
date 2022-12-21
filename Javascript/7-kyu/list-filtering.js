function filter_list(l) {
  return l.filter((e) => !isNaN(e) && typeof e != 'string')
}
