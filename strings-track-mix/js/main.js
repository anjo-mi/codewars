function mix(s1, s2) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let a = {}
    let b = {}
    
    for (let char of s1){
      if (alpha.includes(char)){
        a[char] = (a[char] || '') + char
      }
    }
    for (let prop in a){
      if (a[prop].length < 2){
        delete a[prop]
      }
    }
    
    for (let char of s2){
      if (alpha.includes(char)){
        b[char] = (b[char] || '') + char
      }
    }
    for (let prop in b){
      if (b[prop].length < 2){
        delete b[prop]
      }
    }
    let c = {}
    for (let letter in a){
      if (b.hasOwnProperty(letter)){
        a[letter].length > b[letter].length ? c[`(${letter}) 1:`] = a[letter] : 
        a[letter].length < b[letter].length ? c[`(${letter}) 2:`] = b[letter]: c[`(${letter}) =:`] = a[letter]
      }
    }
    for (let letter in b){
      if (!c[`(${letter}) 2:`] && !c[`(${letter}) 1:`] && !c[`(${letter}) =:`]) c[`(${letter}) 2:`] = b[letter]
    }
    console.log(c)
    let arr = []
    for (let char in c){
      arr.push( char.split(' ')[1] + c[char] )
    }
    arr.sort((a,b) => b.length - a.length)
    console.log(arr)
    
    
  }


  console.log(mix("Are they here", "yes, they are here"), "2:eeeee/2:yy/=:hh/=:rr")
  console.log(mix("looping is fun but dangerous", "less dangerous than coding"), "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg")
  console.log(mix(" In many languages", " there's a pair of functions"), "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt")
  console.log(mix("Lords of the Fallen", "gamekult"), "1:ee/1:ll/1:oo")
  console.log(mix("codewars", "codewars"), "")
  console.log(mix("A generation must confront the looming ", "codewarrs"), "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr")