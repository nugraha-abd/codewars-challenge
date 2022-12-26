function hasSurvived(attackers, defenders) {
  if (attackers.length === 0 || defenders.length === 0) {
    return attackers.length === 0 ? true : false
  }

  let highestTotalSoldier = 0
  let survivor = 0

  if (attackers.length > defenders.length) {
    highestTotalSoldier = attackers.length
  } else if (attackers.length < defenders.length) {
    highestTotalSoldier = defenders.length
  } else {
    highestTotalSoldier = attackers.length
  }

  for (i = 0; i < highestTotalSoldier; i++) {
    if (attackers[i] < defenders[i]) survivor++
  }

  if (survivor > highestTotalSoldier / 2) {
    return true
  } else if (survivor < highestTotalSoldier / 2) {
    return false
  } else {
    return attackers.reduce((a, b) => a + b) <=
      defenders.reduce((a, b) => a + b)
      ? true
      : false
  }
}
