package Golang

func MaxMultiple(d, b int) int {
	var res int

	for i := b; i > 0; i-- {
		if i%d == 0 {
			res = i
			break
		}
	}

	return res
}
