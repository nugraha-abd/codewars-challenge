package Golang

import (
	"fmt"
	"strings"
	"unicode"
)

func Accum(s string) string {
  var accum string
  
  for i, v := range s {
    accum += fmt.Sprintf("%c%s-", unicode.ToUpper(v), strings.Repeat(string(unicode.ToLower(v)), i))
  }
  
  return strings.TrimRight(accum, "-")
}
