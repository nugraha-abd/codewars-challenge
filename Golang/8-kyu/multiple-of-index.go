package Golang

func multipleOfIndex(ints []int) []int {
	var newArr []int

	for i, num := range ints {
		if i == 0 {
			continue
		}
		if num%i == 0 {
			newArr = append(newArr, num)
		}
	}

	return newArr
}