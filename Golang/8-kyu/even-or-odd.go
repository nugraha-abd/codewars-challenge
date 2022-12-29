package Golang

func EvenOrOdd(number int) string {
	var res string

	if number%2 == 0 {
		res = "Even"
	} else {
		res = "Odd"
	}

	return res
}