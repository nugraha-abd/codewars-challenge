package Golang

import "math"

func ClosestMultipleOf10(n uint32) uint32 {
  return uint32(math.Round(float64(n) / 10) * 10)
}
