function howMuch(m,n){
    // $ = 9c + 1
    // $ = 7b + 2
    // 9c + 1 = 7b + 2
    // 9c - 7b = 1
    const min = m >= n ? n : m;
    const max = m === min ? n : m;
      console.log(max,min)
    const possible = [];
    for (let i = min; i <= max; i++){
        const c = (i - 1) / 9;
        const b = (i - 2) / 7;
      console.log({c,b})
        if (Number.isInteger(c) && Number.isInteger(b)){
            possible.push([
                `M: ${i}`,
                `B: ${b}`,
                `C: ${c}`
            ])
        }
    }
    return possible
}

console.log(howMuch(1, 100), [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"]])
console.log(howMuch(2950, 2950), [])