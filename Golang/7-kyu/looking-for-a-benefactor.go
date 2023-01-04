package Golang

import "math"

func NewAvg(arr []float64, navg float64) int64 {
  var sum float64
  
  for _, dono := range arr {
    sum += dono
  }
  
  lastDonation := int64(navg * (float64(len(arr)) + 1) - math.Floor(sum))
  
  if lastDonation < 0 {
    return -1
  }
  
  return lastDonation
}
