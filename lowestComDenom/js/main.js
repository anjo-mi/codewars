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

    let lowest = Math.min(...worksForAll)

    for (let i = 0 ; i < list.length ; i++){
        let mult = lowest / list[i][1]
        list[i][0] *= mult
        list[i][1] *= mult
    }
    return list
}

// function checkAll(arrOfOrig, arrOfDenoms){
//     return arrOfDenoms.filter(el=> arrOfDenoms.every(el => el !== (arrOfOrig.some(el => el) % 2) === 0))
// }


console.log(convertFrac([[1,2],[1,3],[1,4]]))