package Golang

import (
	"unicode"
)

func ToAlternatingCase(str string) string {
  var alternateStr string
  
  for _, char := range str {
    if unicode.IsLower(char) {
      alternateStr += string(unicode.ToUpper(char))
    }else {
      alternateStr += string(unicode.ToLower(char))
    }
  }
  
  return alternateStr
}
