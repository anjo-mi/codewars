const getDivisorsCnt = n =>{
    if (n === 0) return 0
    let divisors = 0
    for (let i = 1; i <= Math.sqrt(n); i++){
        if (n % i === 0){
            divisors++
            if (i !== n/i){
                divisors++
            }
        }
    }
    return divisors
}