package Golang

import "math"

func Heron(a, b, c float64) (area float64) {
  s := (a + b + c) / 2
  
  return math.Sqrt(s * (s - a) * (s - b) * (s - c))
}
