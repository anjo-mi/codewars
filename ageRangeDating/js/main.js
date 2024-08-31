function datingRange(age){
    let min = 0
    let max = 0
    if (age <= 14){
      min = Math.floor(age - .1 * age)
      max = Math.floor(age +.1 * age)
    }else{
      min = Math.floor(age / 2 + 7)
      max = Math.floor((age-7) * 2)
    }
    return `${min}-${max}`
  }

  console.log(datingRange(17)) // "15-20"
  console.log(datingRange(40))// "27-66"
  console.log(datingRange(15))// "14-16"
  console.log(datingRange(35))// "24-56"
  console.log(datingRange(10))// "9-11"