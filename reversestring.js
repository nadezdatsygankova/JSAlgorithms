// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   const element = []
//   let y = str.length - 1
//   for (let x = 0; x < str.length; x++) {
//     element[y] = str[x]
//     y--
//   }
//   return element.join('')
// }


//1 version
function reverse1(str){
  // const arr = str.split('')
  // arr.reverse()
  // return arr.join('')
  return str.split('').reverse().join('')
}

//2 version
function reverse2(str){
  let reverse = ''
  for(let ch of str){
    reverse = ch + reverse
  }
  return reverse
}

//3 version
function reverse3(str) {
  return str.split('').reduce((result, ch) => ch + result, '')
}


console.log(reverse1('hello'))
console.log(reverse2('nanny'))
console.log(reverse3('manny'))

