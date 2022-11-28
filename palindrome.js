// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//2 version
function palindrome(str) {
    return str.split('').every((ch, index)=>{
      return ch === str[str.length - index - 1]
   })

}

console.log(palindrome('abba'))
console.log(palindrome('abbaf'))

//1 version
// function palindrome(str) {
//   const reverse = str.split('').reverse().join('')
//   return str === reverse

// }