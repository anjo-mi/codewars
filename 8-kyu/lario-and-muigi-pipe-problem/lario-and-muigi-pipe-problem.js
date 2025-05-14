 
function pipeFix(numbers){
    let firstNumber = numbers[0]
    let lastNumber = numbers[numbers.length - 1]
    let ascendingArray = []
    for(let i = firstNumber; i <= lastNumber; i++){
        if(i === firstNumber){
            ascendingArray.push(firstNumber)
        }else if(i === lastNumber){
            ascendingArray.push(lastNumber)
        }else{
            ascendingArray.push(i)
        }
        
    }
    return ascendingArray
}