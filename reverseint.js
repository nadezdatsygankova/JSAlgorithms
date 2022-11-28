// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
   const resultString = n.toString().split('').reverse().join('')
   return parseInt(resultString) * Math.sign(n)
}

  reverseInt(15) //=== 51
  reverseInt(981) //=== 189
  reverseInt(500) //=== 5
  reverseInt(-5) //=== -51
  reverseInt(0) //=== -9