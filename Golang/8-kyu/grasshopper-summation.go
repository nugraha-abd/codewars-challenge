package kata

import "fmt"
func Summation(n int) int {
  var sum int
  
  for i := 0; i <= n; i++ {
    sum += i
    fmt.Println(i)
  }
  
  return sum
}