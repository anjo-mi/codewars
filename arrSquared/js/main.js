const comp = (a, b) => {
    if (a === null || a === undefined || b === null || b === undefined || a.length !== b.length){
        return false
    }
    let arr = a.map(el => el**2)
    for (let i = 0 ; i < arr.length ; i++){
        if (!b.includes(arr[i])){
            return false
        }else{
        b.splice(b.indexOf(arr[i]), 1)
        }
    }
    return b.length === 0 ? true : false
  }

  let butt = [12,12,10,9,9]
  let poop = [81, 144,144,100,81]

  console.log(comp(butt,poop))