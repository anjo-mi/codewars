let codeA = '1'
let codeE = '2'
let codeI = '3'
let codeO = '4'
let codeU = '5'

function encode(s) {
  return s.replaceAll('a',codeA).replaceAll('e', codeE).replaceAll('i', codeI).replaceAll('o', codeO).replaceAll('u', codeU)
}

function decode(s) {
  return s.replaceAll(codeA, 'a').replaceAll(codeE, 'e').replaceAll(codeI, 'i').replaceAll(codeO, 'o').replaceAll(codeU, 'u')
}