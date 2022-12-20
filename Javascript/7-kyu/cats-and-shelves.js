function solution(start, finish) {
  let totalJump = 0

  while (finish > start) {
    if (finish - 3 < start) {
      finish -= 1
    } else {
      finish -= 3
    }
    totalJump++
  }

  return totalJump
}
