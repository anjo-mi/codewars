function solve(s){
    let count = 0
    let maxCount = 0
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for (let char of s){
      if (vowels.includes(char)) {
        count++
        if (count > maxCount) {maxCount = count}
      }else{count = 0}
    }
     return maxCount
   }

    console.log(solve("codewarriors")) // 2
    console.log(solve("suoidea")) // 3
    console.log(solve("ultrarevolutionariees")) // 3
    console.log(solve("strengthlessnesses")) // 1
    console.log(solve("cuboideonavicuare")) // 2
    console.log(solve("chrononhotonthuooaos")) // 5
    console.log(solve("iiihoovaeaaaoougjyaw")) // 8