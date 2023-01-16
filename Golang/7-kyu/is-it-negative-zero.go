package Golang

import (
	"fmt"
	"math"
)

func IsNegativeZero(n float64) bool {
  return fmt.Sprint(n) == fmt.Sprint(math.Copysign(0, -1))
}
