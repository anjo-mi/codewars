 
function decodePass( passArr, bin ){
  const poss = bin.split(' ').map(binChar => String.fromCharCode(parseInt(binChar,2))).join('')
  return passArr.includes(poss) ? poss : false;
}