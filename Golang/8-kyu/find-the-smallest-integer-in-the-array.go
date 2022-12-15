package Golang

import (
	"sort"
)

func SmallestIntegerFinder(numbers []int) int {
  sort.Ints(numbers)
  return numbers[0]
}

// What I learned:
// - Sort array of numbers using sort package