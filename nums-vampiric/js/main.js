function vampireTest(a, b) {
    if (a < 0 && b < 0) return false
    
    let factors = (Math.abs(a).toString() + Math.abs(b).toString()).split('').sort((a,b) => a-b)
    let num = Math.abs((a * b)).toString().split('').sort((a,b) => a-b)
    
    return factors.every((el,i) => el === num[i])
  }


  console.log(vampireTest(21,6), true, "Basic: 21 * 6 = 126 should return true")
  console.log(vampireTest(204,615) , true, "Basic: 204 * 615 = 125460 should return true")
  console.log(vampireTest(30,-51) , true, "One Negative: 30 * -51 = -1530 should return true")
  console.log(vampireTest(-246,-510) , false, "Double Negatives: -246 * -510 = 125460 should return false (The negative signs aren't present on the product)")
  console.log(vampireTest(2947050,8469153) , true, "Large: 2947050 * 8469153 = 24959017348650 should return true")
  console.log(vampireTest(2947051,8469153) , false, "Large: 2947051 * 8469153 = 24959025817803 should return false")