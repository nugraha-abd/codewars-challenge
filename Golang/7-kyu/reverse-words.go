package Golang

import "strings"

func ReverseWords(str string) string {
  var s strings.Builder
  
	// Reverse the letter position on each words
  for i := range str {
    s.WriteString(string(str[len(str) - i - 1]))
  }
  
  arr := strings.Split(s.String(), " ")
  
	// Reverse the word position
  for i, j := 0, len(arr)-1; i < j; i, j = i+1, j-1 {
    arr[i], arr[j] = arr[j], arr[i]
  }
  
  return strings.Join(arr, " ")
}
