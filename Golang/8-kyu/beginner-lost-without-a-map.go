package Golang

func Maps(x []int) []int {
	multiplied := make([]int, len(x))

	for i, v := range x {
		multiplied[i] = v * 2
	}

	return multiplied
}