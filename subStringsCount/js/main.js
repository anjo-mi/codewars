function subPowerOf2(s, p) {
    let arr = []
    s = s.split('').map(Number)
    for ( let i = 0 ; i < s.length ; i++ ){
      let total = 0
      let a = s.slice(i)
      while(a.length > 0){
        if (+a.join('') % 2**p === 0){
          total++
        }
        a.pop()
      }
      arr.push(total)
    }
    return arr
  }

  const tests = [
    ["1048", 3, [2, 2, 1, 1]],
    // 2^3 = 8
    // At index 0 (2 substrings)  : 104, 1048
    // At index 1 (2 substrings)  : 0, 048
    // At index 2 (1 substring)   : 48
    // At index 3 (1 substring)   : 8

    ["743212", 4, [0, 1, 1, 0, 0, 0]],
    // 2^4 = 16
    // At index 1 (1 substring) : 432
    // At index 2 (1 substring) : 32

    ["1234", 1, [2, 2, 1, 1]],
    // Index 0  : 12, 1234
    // Index 1  : 2, 234
    // Index 2  : 34
    // Index 3  : 4

    ["256", 8, [1, 0, 0]],
    // 2^8 = 256
    // Index 0  : 256

    // Leading zero still counts
    ["0256", 8, [2, 1, 0, 0]]
    // 2^8 = 256
    // Index 0  : 0, 0256
    // Index 1  : 256
  ];

  for (const [s, p, expected] of tests) {
      console.log(subPowerOf2(s, p), expected);
  }
