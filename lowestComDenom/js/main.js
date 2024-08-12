function convertFrac(list){
    let arr = []
    list.forEach(el => {
        if(!arr.includes(el[1])){
            arr.push(el[1])
        }
    })
    let highestDenom = arr.reduce((a,el) => a * el, 1)
    let possDenoms = []


    for (let i = 0 ; i < Math.sqrt(highestDenom) ; i++){
        if (highestDenom % i === 0){
            possDenoms.push(i)
            if (i !== highestDenom / i){
                possDenoms.push(highestDenom / i)
            }
        }
    }

    let worksForAll = []

    for (let i = 0 ; i < possDenoms.length ; i ++){
        for (let j = 0 ; j < arr.length ; j++){
            if (possDenoms[i] % arr[j] === 0){
                worksForAll.push(possDenoms[i])
            }
        }
    }

    let lowest = Math.min([...worksForAll])
    return lowest
  }

console.log(convertFrac([[1,2],[1,3],[1,4]]))