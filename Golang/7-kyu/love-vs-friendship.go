package Golang

func WordsToMarks(s string) int {
	var sum int

	for _, v := range s {
		sum += int(v - 96)
	}

	return sum
}

// What I learned
// - Get the unicode value from a char by using int conversion