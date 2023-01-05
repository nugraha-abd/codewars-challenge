package Golang

import (
	"fmt"
	"strings"
)

func Vaporcode(s string) string {
  var result strings.Builder
  
  removeSpace := strings.ReplaceAll(s, " ", "")
  toUpperCase := strings.ToUpper(removeSpace)
  
  for _, value := range toUpperCase {
    result.WriteString(fmt.Sprintf("%c  ", value))
  }
  
  return strings.TrimRight(result.String(), " ")
}

// What I learned
// - Use strings.Builder
// - Use WriteString to concat strings
