function wordValue(a) {
    let totals = []
    a.forEach((el, i) => {
      let count = 0
      for (let key of el){
        if (key != ' '){
          count += key.charCodeAt(0) - 96
        }
      }
      totals.push(count * (i + 1))
    })
    return (totals)
  }

console.log( wordValue(["codewars","abc","xyz"]), [88,12,225] );
console.log( wordValue(["abc abc","abc abc","abc","abc"]), [12,24,18,24] );