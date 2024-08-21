function maxProduct(nums, size){
    return nums.sort((a,b) => b - a).slice(0,size).reduce((a,el) => a * el, 1)
  }