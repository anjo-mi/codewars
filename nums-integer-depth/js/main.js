function computeDepth (x){
    let i = 1
    let nums = []
    while (nums.length < 10){
      let altNum = (x*i).toString().split('')
      altNum.forEach(el => {
        if (!nums.includes(el)){
          nums.push(el)
        }
      })
      i++
    }
    return i - 1
  }

  console.log(computeDepth(1),10);
  console.log(computeDepth(42),9);