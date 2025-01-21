function oddOnesOut(nums) {
    let count = nums.reduce((a,el) => {
      a[el] = (a[el] || 0) + 1
      return a
    }, {})
    return nums.filter(el => count[el] % 2 === 0)
  }