function compare(s1, s2) {
    if (!s1        && !s2       ) return true
    if (s1 == null || s2 == null) return false
    function checkLetters(s){
      for (let char of s){
        let code = char.charCodeAt(0)
        if ((code < 97 || code > 122) && (code < 65 || code > 90)){
          console.log(code)
          return false
        }
      }
        return true
    }
    
    function conversionCheck(s){
      return checkLetters(s) ? s : ''
    }
    s1 = conversionCheck(s1)
    s2 = conversionCheck(s2)
    
    
    s1 = s1.split('')
            .map(el => el.toUpperCase().charCodeAt(0))
            .reduce((a,el) => a + el, 0)
    s2 = s2.split('')
            .map(el => el.toUpperCase().charCodeAt(0))
            .reduce((a,el) => a + el, 0)
    
    return s1 === s2 ? true : false
  }

console.log(compare("AD", "BC")) // true);
console.log(compare("AD", "DD")) // false);
console.log(compare("gf", "FG")) // true);
console.log(compare("Ad", "DD")) // false);
console.log(compare("zz1", ""))  // true);
console.log(compare("ZzZz", "ffPFF"))// true);
console.log(compare("kl", "lz"))// false);
console.log(compare("!!", "7476"))// true);
console.log(compare("##", "1176"))// true);
console.log(compare(null, "BC"))// false);
console.log(compare(null, null))// true);
console.log(compare(null, ""))// true);
console.log(compare("", ""))// true);