package Golang

import "fmt"

func Spacify(s string) string {
  if s == "" {
    return ""
  }
  
  var spacify string
  
  for _, v := range s {
    spacify += fmt.Sprintf("%c ", v)
  }
  
  return spacify[:len(spacify)-1]
}
