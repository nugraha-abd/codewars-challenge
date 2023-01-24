package Golang

import (
	"strings"
	"unicode"
)

func CamelCase(s string) string {
  splitString := strings.Fields(s)
  
  for i, word := range splitString {
    r := []rune(word)
    r[0] = unicode.ToUpper(r[0])
    splitString[i] = string(r)
  }
  
  return strings.Join(splitString, "")
}
