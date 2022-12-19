var number = function (busStops) {
  let totalPassenger = 0

  busStops.forEach((passenger) => {
    totalPassenger = totalPassenger + passenger[0] - passenger[1]
  })

  return totalPassenger
}
