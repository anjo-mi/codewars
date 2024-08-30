var countDeafRats = function(town) {
    town = town.split(' ').join('')
    town = town.split('P')
    let deafVermin = 0
    console.log(town)
    for (let i = 0 ; i < town.length ; i++){
        if (town[i] === ''){
            deafVermin += 0
            return
        }else{
            town[i] = town[i].split('')
        }
        console.log(town[i])
        if (i === 0){
            town[i].forEach((el,i) =>{
                if (i === 0 && el === 'O'){
                    deafVermin++
                }else if (el === ' O' && el[i - 1] === '~'){
                    deafVermin += 0
                }else if (el === 'O' && el[i + 1] === '~' && el[i + 2] !== 'O'){
                    deafVermin++
                }
            })
        }
    }
    console.log(deafVermin)
    
    return 0;
  }
  


countDeafRats("~O~O~O~O P")// 0
countDeafRats("P O~ O~ ~O O~")// 1
countDeafRats("~O~O~O~OP~O~OO~")// 2