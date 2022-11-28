// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// const string = "Hello world"
// const chars = {};

// for (const char of string) {
//     chars[char] = chars[char] + 1 || 1
// }

// for (const char of string) {
//   if(!chars[char]){
//     chars[char] = 1
//   }else{
//     chars[char]++
//   }
// }

// console.log(chars)

function maxChar(str) {
  let charMap = {}
  //str -> the object
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  let max = 0
  let maxChar = ''
  for (let char in charMap) {
     if(charMap[char] > max ){
      max = charMap[char]
      maxChar= char
     }
  }
  return maxChar
}

console.log(maxChar('Hello'))

module.exports = maxChar;