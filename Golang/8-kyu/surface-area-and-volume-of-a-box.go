package Golang

func GetSize(w, h, d int) [2]int {
	return [2]int{2*w*h + 2*w*d + 2*h*d, w * h * d}
}
