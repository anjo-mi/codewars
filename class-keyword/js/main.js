class KeywordCipher{
    constructor(abc, key){
      this.abc = abc
      this.key = key
      this.encoded = this.createCode()
    }
    
    createCode(){
      let alpha = this.abc.split('')
      let word =   [...new Set(this.key.split(''))]
      

      word.forEach(char =>{
        const i = alpha.indexOf(char)
        if ( i !== -1 ){
            alpha.splice(i , 1)
        }
      })

      return word.concat(alpha)
    }
    //   console.log(alpha,word,keyedBeta)
    
    
    encode(str){
      return str.split('').map(char => {
        let i = this.abc.indexOf(char)
        return i !== -1 ? this.encoded[i] : char
      }).join('')        
    }
    
    decode(str){
      return str.split('').map(char => {
        let i = this.encoded.indexOf(char)
        return i !== -1 ? this.abc[i] : char
      }).join('')
    }
  }

let abc = "abcdefghijklmnopqrstuvwxyz";
let key = "keyword";
var cipher = new KeywordCipher(abc, key);

console.log(cipher.encode("abc"), "key");
console.log(cipher.encode("xyz"), "vxz");
console.log(cipher.decode("key"), "abc");
console.log(cipher.decode("vxz"), "xyz");

console.log(cipher.createCode())
