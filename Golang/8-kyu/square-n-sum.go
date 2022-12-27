package Golang

func SquareSum(numbers []int) int {
	var sum int

	for _, num := range numbers {
		sum += (num * num)
	}

	return sum
}
