const gap = (g, m, n) => {
    const checkPrime = num => {
        if (num <=1) return false
        for (let i = 2, s = Math.sqrt(num) ; i <= s ; i++){
            if (num % i === 0) return false
        }
        return true
    }
    
    let prevPrime = null

    for (let i = m ; i <= n ; i++){
        if (checkPrime(i)){
            if (prevPrime !== null && i - prevPrime === g){
                return [prevPrime, i]
            }
            prevPrime = i
        }
    }
    return null

}

  console.log(gap(2, 2, 50))
  console.log(gap(2, 100, 110))