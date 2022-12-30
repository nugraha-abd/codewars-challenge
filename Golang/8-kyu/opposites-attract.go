package Golang

func LoveFunc(flower1, flower2 int) bool {
	if (flower1+flower2)%2 != 0 {
		return true
	}
	return false
}
