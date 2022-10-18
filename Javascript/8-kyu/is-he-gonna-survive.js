// Answer

function hero(bullets, dragons) {
  return bullets / dragons >= 2 ? true : false
}

/* Test script
  if number of bullets is greater than or equal to 2 times the number of dragons, return true, else return false
*/
console.log(hero(10, 5))
console.log(hero(7, 4))
console.log(hero(4, 5))
console.log(hero(100, 40))
console.log(hero(1500, 751))
console.log(hero(0, 1))
