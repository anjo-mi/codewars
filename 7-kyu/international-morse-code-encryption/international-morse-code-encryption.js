 
function encryption(message) {
  return message.split('').map(char => {
    if (char !== ' ') return CHAR_TO_MORSE[char]
    else return ' '
  }).join(' ')
}