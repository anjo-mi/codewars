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

    //   console.log(alpha,word,keyedBeta)
      for ( let key in keyedBeta ){
        if (alpha.includes(key)){
          let letter = alpha.splice( alpha.indexOf(key) , 1)
        }
      }
      alpha = word.concat(alpha)
      return alpha
    }
    
    encode(str){
      let coded = this.createCode()
      str = str.split('')
      for (let i = 0 ; i < str.length ; i++){
        let index = this.abc.indexOf(str[i])
        str[i] = coded[index]
      }
      return str.join('')
        
    }
    
    decode(str){
        let coded = this.createCode()
        str = str.split('')
        for (let i = 0 ; i < str.length ; i++){
            let index = coded.indexOf(str[i])
            str[i] = this.abc[index]
        }
        return str.join('')
      
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
