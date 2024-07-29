const solve = str => {
    str = str.replaceAll('a', ' ').replaceAll('e', ' ').replaceAll('i', ' ').replaceAll('o', ' ').replaceAll('u', ' ')
    str = str.split(' ')
    let num = 0
    str.forEach(el => {
        let val = 0
        for (let i = 0 ; i < el.length ; i++){
            val += el.charCodeAt(i) - 96
        }
        if (val > num){
            num = val
        }
    })
    return num
}

console.log(solve('zodiacs'))
console.log(solve('strength'))
