package Golang

import "strings"

func solution(str, ending string) bool {
  return strings.HasSuffix(str, ending)
}

// What I learned
// - Use HasSuffix method from strings package