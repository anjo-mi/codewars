const orderedCount = function (text) {
    let obj = {}
    let arr = []
    for (let char of text){
        if (!arr.includes(char)){
            arr.push(char)
        }
        if (!obj[char]){
            obj[char] = 0
        }
        obj[char]++
    }
    return arr.map(char => [char, obj[char]])
}