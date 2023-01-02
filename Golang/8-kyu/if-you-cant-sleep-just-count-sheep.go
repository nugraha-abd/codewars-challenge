package Golang

import "fmt"

func countSheep(num int) string {
  var count string
  
  for i := 0; i < num; i++ {
    count += fmt.Sprintf("%d sheep...", i + 1)
  }
  
  return count
}
