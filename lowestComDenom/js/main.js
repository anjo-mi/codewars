function convertFrac(list){
    let arr = []
    list.forEach(el => {
        if(!arr.includes(el[1])){
            arr.push(el[1])
        }
    })
    console.log(arr)
    let highestDenom = arr.reduce((a,el) => a * el, 1)
    console.log(highestDenom)
    let possDenoms = []


    for (let i = 0 ; i < Math.sqrt(highestDenom) ; i++){
        if (highestDenom % i === 0){
            possDenoms.push(i)
            if (i !== highestDenom / i){
                possDenoms.push(highestDenom / i)
            }
        }
    }


    console.log(possDenoms)
    let worksForAll = []

    
    for (let i = 0 ; i < possDenoms.length ; i ++){
        let trueOrFalse = []
        for (let j = 0 ; j < arr.length ; j++){
            if (possDenoms[i] % arr[j] === 0){
                trueOrFalse.push(true)
            }else{
                trueOrFalse.push(false)
            }
        }if(trueOrFalse.every(el => el)){
            worksForAll.push(possDenoms[i])
        } 
    }
    console.log(worksForAll)
    let lowest = Math.min(...worksForAll)
    return lowest
}

// function checkAll(arrOfOrig, arrOfDenoms){
//     return arrOfDenoms.filter(el=> arrOfDenoms.every(el => el !== (arrOfOrig.some(el => el) % 2) === 0))
// }


console.log(convertFrac([[1,2],[1,3],[1,4]]))