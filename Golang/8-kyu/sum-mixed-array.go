package Golang

import "strconv"

func SumMix(arr []any) int {
  var sum int
  
  for _, v := range arr {
    switch value := v.(type) {
      case string:
        convertToInt, _ := strconv.Atoi(value)
        sum += convertToInt
      case int:
        sum += value
    }
  }
  
  return sum
}

// What I learned
// - Type assertion
// - Convert number from string to int
