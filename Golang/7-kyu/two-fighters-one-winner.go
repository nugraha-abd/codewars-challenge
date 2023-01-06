package Golang

type Fighter struct {
	Name            string
	Health          int
	DamagePerAttack int
}

func DeclareWinner(fighter1 Fighter, fighter2 Fighter, firstAttacker string) string {
	first, second := fighter1, fighter2

	if fighter2.Name == firstAttacker {
		first, second = fighter2, fighter1
	}

	for {
		first.Health -= second.DamagePerAttack
		second.Health -= first.DamagePerAttack

		if second.Health <= 0 {
			return first.Name
		}
		if first.Health <= 0 {
			return second.Name
		}
	}
}

// What I learned
// - Declare two variables at one line with comma
// - Swap value between two variables
