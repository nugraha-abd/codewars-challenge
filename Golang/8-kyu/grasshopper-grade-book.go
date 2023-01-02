package Golang

func GetGrade(a, b, c int) rune {
	avgScore := (a + b + c) / 3
	if avgScore >= 90 && avgScore <= 100 {
		return 'A'
	} else if avgScore >= 80 && avgScore < 90 {
		return 'B'
	} else if avgScore >= 70 && avgScore < 80 {
		return 'C'
	} else if avgScore >= 60 && avgScore < 70 {
		return 'D'
	} else {
		return 'F'
	}
}
