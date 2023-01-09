package Golang

import "unicode"

func Solve(s string) []int {
	res := make([]int, 4)
  
  for _, v := range s {
    if unicode.IsUpper(v) { res[0]++ }
    if unicode.IsLower(v) { res[1]++ }
    if unicode.IsNumber(v) { res[2]++ }
    if unicode.IsSymbol(v) || unicode.IsPunct(v) { res[3]++ }
  }
  
  return res
}
