package Golang

func CountPositivesSumNegatives(numbers []int) []int {
	var res []int

	var count int
	var sum int

	for _, v := range numbers {
		if v > 0 {
			count += 1
		} else if v < 0 {
			sum += v
		} else {
			continue
		}
	}

	return append(res, count, sum)
}
