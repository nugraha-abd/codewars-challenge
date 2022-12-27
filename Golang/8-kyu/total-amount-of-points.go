package Golang

func Points(games []string) int {
	var point int

	for _, score := range games {
		if score[0] > score[2] {
			point += 3
		}
		if score[0] == score[2] {
			point += 1
		}
	}

	return point
}