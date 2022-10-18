async function execute(action, nTimes) {
  let arr = []

  for (let i = 0; i < nTimes; i++) {
    arr.push(action())
  }

  await Promise.all(arr)
}
