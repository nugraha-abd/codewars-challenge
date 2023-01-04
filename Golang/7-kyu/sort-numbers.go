package Golang

import "sort"

func SortNumbers(numbers []int) []int {
  if len(numbers) == 0 { return []int{} }
  
  sort.Ints(numbers)
  
  return numbers
}
