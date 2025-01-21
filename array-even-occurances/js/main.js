function oddOnesOut(nums) {
    let count = nums.reduce((a,el) => {
      a[el] = (a[el] || 0) + 1
      return a
    }, {})
    return nums.filter(el => count[el] % 2 === 0)
  }


    console.log(oddOnesOut([1, 2, 3, 1, 3, 3]), [1, 1]);
    console.log(oddOnesOut([75, 68, 75, 47, 68]), [75, 68, 75, 68]);
    console.log(oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67]), [67, 67]);
    console.log(oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100]), [100, 100, 100, 100]);
    console.log(oddOnesOut([82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50]), [44, 79, 50, 44, 79, 50]);