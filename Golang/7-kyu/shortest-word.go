package Golang

import "strings"

func FindShort(s string) int {
  splitString := strings.SplitN(s, " ", len(s))
  
  shortest := splitString[0]
  
  for _, str := range splitString {
    if len(shortest) > len(str) {
      shortest = str
    }
  }
  
  return len(shortest)
}
