package Golang

import (
	"fmt"
	"strings"
)

func MultiTable(number int) string {
  var resultTable string
  
  for i := 1; i <= 10; i++ {
    resultTable += fmt.Sprintf("%d * %d = %d\n", i, number, i*number)
  }
  
  return strings.TrimRight(resultTable, "\n")
}
