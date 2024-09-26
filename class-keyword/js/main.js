class KeywordCipher{
    constructor(abc, key){
      this.abc = abc
      this.key = key
    }
    
    createCode(){
      let alpha = this.abc.split('')
      let word = this.key.split('')
      let keyedBeta = word.reduce( (a,el,i) => {
        a[el] = a[el] || ( alpha.indexOf(el) + 1 )
        return a
      } , {} )
      for ( let key in keyedBeta ){
        if (alpha.includes(key)){
          alpha = alpha.splice( alpha.indexOf(key) , 1)
        }
      }
      for ( let i = word.length - 1 ; i <= 0 ; i-- ){
        alpha.unshift(word[i])
      }
      return alpha
    }
    
    encode(str){
      let coded = this.createCode
        
    }
    
    decode(str){
      
    }
  }

  var abc = "abcdefghijklmnopqrstuvwxyz";
var key = "keyword";
var cipher = new KeywordCipher(abc, key);

console.log(cipher.encode("abc"), "key");
console.log(cipher.encode("xyz"), "vxz");
console.log(cipher.decode("key"), "abc");
console.log(cipher.decode("vxz"), "xyz");