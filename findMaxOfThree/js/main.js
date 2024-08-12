function maxTriSum(nums){
    let arr = []
    nums.forEach(el => {
      if (!arr.includes(el)){
        arr.push(el)
      }
    })
    arr.sort((a,b) => b-a)
    return arr.splice(0,3).reduce((a,el) => a + el, 0)
  }