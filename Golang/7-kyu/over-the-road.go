package Golang

func OverTheRoad(address int, n int) int {
	return n*2 - address + 1
}

// Use for-loop, will be timed out if the length is to big
//   var evenHouse, oddHouse []int

//   for i := 0; i < n*2; i += 2 {
//     oddHouse = append(oddHouse, i + 1)
//     evenHouse = append(evenHouse, n - i + n)
//   }

//   if address % 2 == 0 {
//     i := sort.SearchInts(evenHouse, address)
//     return oddHouse[len(oddHouse) - i - 1]
//   } else {
//     i := sort.SearchInts(oddHouse, address)
//     return evenHouse[i]
//   }
