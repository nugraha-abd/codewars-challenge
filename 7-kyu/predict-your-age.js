function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  return Math.floor(
    Math.sqrt([...arguments].map((age) => age * age).reduce((a, b) => a + b)) /
      2
  )
}
