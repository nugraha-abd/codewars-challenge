package Golang

import (
	"fmt"
	"math"
)

func IsNegativeZero(n float64) bool {
  if fmt.Sprint(n) == fmt.Sprint(math.Copysign(0, -1)) {
    return true
  }
  return false
}
