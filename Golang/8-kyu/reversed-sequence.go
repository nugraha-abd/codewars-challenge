package Golang

import "fmt"
func ReverseSeq(n int) []int {
  var arr []int
  
  for i := n; i > 0; i-- {
    fmt.Println(i)
    arr = append(arr, i)
  }
  
  return arr
}
