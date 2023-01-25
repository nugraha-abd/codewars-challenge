package Golang

import (
	"strconv"
	"strings"
	"unicode"
)

func Order(sentence string) string {
  var result = make([]string, len(sentence))
  
  splitString := strings.Fields(sentence)
  
  for _, word := range splitString {
    for _, letter := range word {
      if unicode.IsDigit(letter) {
        order, _ := strconv.Atoi(string(letter))
        result[order - 1] = string(word)
      }
    }
  }
  return strings.TrimRight(strings.Join(result, " "), " ")
}
