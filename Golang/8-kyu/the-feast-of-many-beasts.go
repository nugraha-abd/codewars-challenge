package Golang

func Feast(beast string, dish string) bool {
	if beast[0:1] == dish[0:1] && beast[len(beast)-1:] == dish[len(dish)-1:] {
		return true
	}
	return false
}

// What I learned
// - Get the first letter of a string
// - Get the last letter of a s string
