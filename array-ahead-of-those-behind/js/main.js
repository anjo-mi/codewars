function arrayLeaders(nums){
    return nums.reduce((a,el,i) => {
      if (i === nums.length - 1){
        if (el > 0){
          a.push(el)
        }
        return a
      }
      else if (el > nums.slice(i + 1).reduce((acc,num) => acc + num)){
        a.push(el)
      }
      return a
    }, [])
  }

  console.log(arrayLeaders([1,2,3,4,0]), [4]);
  console.log(arrayLeaders([16,17,4,3,5,2]), [17,5,2]);
  console.log(arrayLeaders([-1,-29,-26,-2]), [-1]);
  console.log(arrayLeaders([-36,-12,-27]),  [-36,-12]);
  console.log(arrayLeaders([5,-2,2]), [5,2]);
  console.log(arrayLeaders([0,-1,-29,3,2]),  [0,-1,3,2]);