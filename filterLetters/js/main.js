const reverseLetters = str => str.split('').filter(el => el.toLowerCase() !== el.toUpperCase()).reverse().join('')

console.log(reverseLetters('uibevieb3b4t43iugbv??03'))