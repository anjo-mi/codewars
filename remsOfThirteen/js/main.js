function thirt(n) {
    let num = n.toString().split('').reverse().map(Number)
    let arr = []
    for (let i = 0; i <= 5; i++){
      arr.push((10**i) % 13)
    }
    while(num.length > arr.length){
      arr = arr.concat(arr)
    }
    let total = 0
    for (let i = 0; i < num.length ; i++){
      total += num[i] * arr[i]
    }
    if (total === n){
      return total
    }else{
      return thirt(total)
    }
  }

thirt(8529)
thirt(85299258)
thirt(5634)
thirt(1111111111)
thirt(987654321)