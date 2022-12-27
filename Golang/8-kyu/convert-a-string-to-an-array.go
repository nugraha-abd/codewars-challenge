package Golang

import "strings"

func StringToArray(str string) []string {
  arrayOfString := strings.Split(str, " ")
  
  return arrayOfString
}
