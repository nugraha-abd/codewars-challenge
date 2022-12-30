package Golang

import (
	"fmt"
	"strings"
)

func Solution(word string) string {
  var reverseStr strings.Builder
  
  for i := range word {
    reverseStr.WriteString(string(word[len(word) - i - 1]))
    fmt.Println(reverseStr)
  }
                        
  return reverseStr.String()
}
