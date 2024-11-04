function binaryToString(bin) {
    let str = ''
    for (let i = 0, j = 0 ; i < bin.length ; i += 8){
      str += String.fromCharCode( parseInt(bin.substring(i,i+8),2) )
    }
    return str
  }


console.log(binaryToString('01100001'), 'a')
console.log(binaryToString('01001011010101000100100001011000010000100101100101000101'), 'KTHXBYE')
console.log(binaryToString('00110001001100000011000100110001'), '1011')
console.log(binaryToString('001111000011101000101001'), '<:)')