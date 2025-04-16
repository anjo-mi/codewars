 
function List(){
  this.countSpecDigits=function(ints, digits){
    const totals = [];
    for (const digit of digits){
      const total = ints.reduce((a,el) => a += el.toString().split('').reduce((tot,dig) => {
        if (+dig === digit) tot++
        return tot
      },0),0)
      totals.push([digit,total])
    }
    return totals;
  }
}