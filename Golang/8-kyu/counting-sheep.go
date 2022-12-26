package Golang

func CountSheeps(numbers []bool) int {
	totalSheep := 0

	for _, sheep := range numbers {
		if sheep {
			totalSheep += 1
		}
	}

	return totalSheep
}
