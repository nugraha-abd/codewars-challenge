const head = (arr) => {
  return arr[0]
}

const tail = (arr) => {
  let result = []

  for (i = 1; i < arr.length; i++) {
    result.push(arr[i])
  }

  return result
}

const init = (arr) => {
  let result = []

  for (i = 0; i < arr.length - 1; i++) {
    result.push(arr[i])
  }

  return result
}

const last = (arr) => {
  return arr[arr.length - 1]
}
