package Golang

import (
	"strings"
	"unicode"
)

func ToJadenCase(str string) string {
  splitString := strings.Fields(str)
  
  for i, word := range splitString {
    r := []rune(word)
    r[0] = unicode.ToUpper(r[0])
    splitString[i] = string(r)
  }
  
  return strings.Join(splitString, " ")
}
