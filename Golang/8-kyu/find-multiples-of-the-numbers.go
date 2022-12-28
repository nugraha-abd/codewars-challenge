package Golang

func FindMultiples(integer, limit int) []int {
	multiple := []int{integer}

	multiplier := integer

	for integer < limit {
		integer += multiplier
		if integer <= limit {
			multiple = append(multiple, integer)
		}
	}

	return multiple
}
