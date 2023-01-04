package Golang

import "math"

func Incrementer(n []int) []int {
  for i, v := range n {
    n[i] = v + i+1
    if n[i] >= 10 { 
      n[i] = int(math.Abs(float64(n[i] % 10.0)))
    }
  }
  return n
}
