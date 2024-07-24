function encrypt(text, n) {
    if (n <= 0 || text === null || text === ''){
        return text
    }
    let arr = text.split('')
    while(n > 0){
        let odds = arr.filter((el,i) => i % 2 === 1)
        let evens = arr.filter((el,i) => i % 2 === 0)
        arr = odds.concat(evens)
        n--
    }
    text = arr.join('')
    return text

}

function decrypt(encryptedText, n) {
    if(n <= 0 || encryptedText === null || encryptedText === ''){
        return encryptedText
    }
    let arr = encryptedText.split('')
    while(n > 0){
        if(arr.length % 2 == 1){
            let backHalf = arr.splice((arr.length - 1) / 2)
            let frontHalf = arr
            arr = []
            for (let i = 0 ; i <= backHalf.length - 1 ; i++){
                arr.push(backHalf[i])
                if (frontHalf[i] !== undefined){ arr.push(frontHalf[i])
                }
            }
        }else{
            let backHalf = arr.splice((arr.length / 2))
            let frontHalf = arr
            arr = []
            for (let i = 0 ; i <= backHalf.length - 1 ; i++){
                arr.push(backHalf[i], frontHalf[i])
            }
        }
        n--
    }
    return (arr.join(''))
}

encrypt('This is a test!', 4)

encrypt("This kata is very interesting!",1)

decrypt("hskt svr neetn!Ti aai eyitrsig", 1)