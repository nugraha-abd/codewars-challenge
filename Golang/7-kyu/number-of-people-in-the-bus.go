package Golang

func Number(busStops [][2]int) int {
	var in, out int

	for _, v := range busStops {
		in += v[0]
		out += v[1]
	}

	return in - out
}
