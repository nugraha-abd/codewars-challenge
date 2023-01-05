package Golang

func Divisors(n int) (count int) {
	for i := n; i > 0; i-- {
		if n%i == 0 {
			count++
		}
	}
	return
}
