package Golang

import "math"

func RoundToNext5(n int) int {
  return int(math.Ceil(float64(n) / 5) * 5)
}
