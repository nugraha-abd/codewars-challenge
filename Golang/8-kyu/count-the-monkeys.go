package kata

func monkeyCount(n int) []int {
	count := []int{}

	for i := 0; i < n; i++ {
		count = append(count, i+1)
	}

	return count
}

// What I learned:
// - Initialize a new slice
// - Push new value to a slice