package Golang

import (
	"strconv"
	"strings"
	"unicode"
)

func Order(sentence string) string {
  splitString := strings.Fields(sentence)
  
  var result = make([]string, len(splitString))
  
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

// What I learned:
// - Get the digit from a string
// - Convert the digit as a string into int
