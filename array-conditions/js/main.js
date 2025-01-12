function findMissingNumber(seq) {
    if (!seq) return 0
    const numbers = seq.split(' ')
    if (numbers.some(n => isNaN(n) || isNaN(parseInt(n)))) {
      return 1
    }
    const sorted = numbers.map(Number).sort((a, b) => a - b)
    if (sorted.length === 0) return 0
    if (sorted[0] !== 1) return 1
    const unique = [...new Set(sorted)]
    let isComplete = true
    let firstMissing = 1
    
    for (let i = 0; i < unique.length; i++) {
      if (unique[i] !== i + 1) {
        isComplete = false
        firstMissing = i + 1
        break
      }
    }
    
    return isComplete ? 0 : firstMissing
  }

console.log(findMissingNumber("1 2 3 5"),4,"It must work for missing middle terms")
console.log(findMissingNumber("1 3"),2,"It must work for missing middle terms")
console.log(findMissingNumber("1 5"),2,"It must work for missing more than one number")
console.log(findMissingNumber(""), 0,"It must return 0 for an empty sequence")
console.log(findMissingNumber("1 2 3 4 5"),0,"It must return 0 if no number is missing")
console.log(findMissingNumber("2 3 4 5"),1,"It must return 1 for a sequence missing the first element")
console.log(findMissingNumber("2 6 4 5 3"),1,"It must work for a shuffled input")
console.log(findMissingNumber("2 1 4 3 a"),1,"It must return 1 for an invalid sequence")
