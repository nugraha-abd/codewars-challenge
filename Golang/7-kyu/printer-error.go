package Golang

import "fmt"

func PrinterError(s string) string {
  var totalError int
  
  for _, v := range s {
    fmt.Println(v)
    if v < 97 || v > 109 {
      totalError += 1
    }
  }
  
  return fmt.Sprint(totalError, "/", len(s))
}
