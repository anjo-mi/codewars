let roman = {
    M:1000, D:500, C:100, L:50, X:10, V:5, I:1
  }
  
  
  class RomanNumerals {
    static toRoman(num) {
      let romans = [this.checkMs(num), 
                    this.checkCDs(num), 
                    this.checkXs(num), 
                    this.checkIs(num)
                   ].filter(el => el && el !== ' ')
      return romans.join('')
    }
    
    static checkMs(num){
      let ms = Math.floor((num / 1000))
      return 'M'.repeat(ms)
    }
    
    static checkCDs(num){
      let cs = Math.floor(((num % 1000) / 100))
      if (cs === 4) return 'CD'
      if (cs === 9) return 'CM'
      if (cs >= 5) return 'D' + ('C'.repeat(cs - 5))
      return 'C'.repeat(cs)
    }
    
    static checkXs(num){
      let xs = Math.floor(((num % 1000) % 100) / 10)
      if (xs === 4) return 'XL'
      if (xs === 9) return 'XC'
      if (xs >= 5) return 'L' + ('X'.repeat(xs - 5))
      return 'X'.repeat(xs)
    }
    
    static checkIs(num){
      let is = (num % 1000) % 10
      if (is === 4) return 'IV'
      if (is === 9) return 'IX'
      if (is >= 5) return 'V' + ('I'.repeat(is - 5))
      return 'I'.repeat(is)
    }
    
    static fromRoman(str) {
      let skip = false
      str = str.split('')
      let count = str.reduce((a,el,i) => {
        if (skip){
          skip = false
          return a
        }

        if (roman[el] < roman[str[i + 1]]){
          a += (roman[str[i + 1]] - roman[el])
          skip = true
        }else{
          a += roman[el]
        }
        return a
      }, 0)
      return count;
    }
  }


  console.log(RomanNumerals.toRoman(1000), 'M');
  console.log(RomanNumerals.toRoman(4), 'IV');
  console.log(RomanNumerals.toRoman(1), 'I');
  console.log(RomanNumerals.toRoman(1990), 'MCMXC');
  console.log(RomanNumerals.toRoman(2008), 'MMVIII');
  console.log(RomanNumerals.fromRoman('XXI'), 21);
  console.log(RomanNumerals.fromRoman('I'), 1);
  console.log(RomanNumerals.fromRoman('IV'), 4);
  console.log(RomanNumerals.fromRoman('MMVIII'), 2008);
  console.log(RomanNumerals.fromRoman('MDCLXVI'), 1666);