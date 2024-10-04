class CaesarCipher{
    constructor(num){
      this.steps = num
      this.alpha = ' abcdefghijklmnopqrstuvwxyz'
    }
    
    encode(str){
      str = str.toLowerCase().split('')
      for ( let i = 0 ; i < str.length ; i++ ){
        if ( !this.alpha.includes(str[i]) || str[i] === ' ' ){
          str[i] = str[i]
        }else{
          let index = this.alpha.indexOf(str[i])
          console.log(index, str[i])
          if (index + this.steps > 26){
            str[i] = this.alpha[ index + this.steps - 26 ].toUpperCase()
          }else{
            str[i] = this.alpha[index + this.steps].toUpperCase()
          }
        }
      }
      return str.join('')
    }
    
    decode(str){
      str = str.toLowerCase().split('')
      for ( let i = 0 ; i < str.length ; i++ ){
        if ( !this.alpha.includes(str[i]) || str[i] === ' ' ){
          str[i] = str[i]
        }else{
          let index = this.alpha.indexOf(str[i])
          console.log(index, str[i])
          if ( index - this.steps < 1 ){
            str[i] = this.alpha[ (index - this.steps) + 26 ].toUpperCase()
          }else{
            str[i] = this.alpha[index - this.steps].toUpperCase()
          }
        }
      }
      return str.join('')
    }
    
  }

  const c = new CaesarCipher(5);

  console.log(c.encode('Codewars'), 'HTIJBFWX');
  console.log(c.decode('HTIJBFWX'), 'CODEWARS');