package Golang

func RepeatStr(repetitions int, value string) string {
	var str string

	for i := 0; i < repetitions; i++ {
		str += value
	}

	return str
}