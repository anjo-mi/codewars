function calculate(str) {
    let obj = { plus: '+', minus: '-' }
    for (let key in obj){
      str = str.replaceAll(key, obj[key])
    }
    
    let num = []
    let op = []
    let currNum = ''
    
    for (let i = 0 ; i < str.length; i++){
      const char = str[i]
      if ('+-x/'.includes(char)){
        num.push(+currNum)
        op.push(char)
        currNum = ''
      }else{
        currNum += char
      }
    }
    num.push(+currNum)
    
      const calculate = () => {
      for (let i = 0; i < op.length; i++) {
        if (op[i] === 'x' || op[i] === '/') {
          const result = op[i] === 'x' 
            ? num[i] * num[i + 1]
            : num[i] / num[i + 1];
          
          num.splice(i, 2, result);
          op.splice(i, 1);
          i--;
        }
      }
  
      let result = num[0];
      for (let i = 0; i < op.length; i++) {
        const nextNum = num[i + 1];
        if (op[i] === '+') {
          result += nextNum;
        } else if (op[i] === '-') {
          result -= nextNum;
        }
      }
  
      return result;
    };
  
    return String(calculate())
  }

console.log(calculate("1plus2plus3plus4"), '10');
console.log(calculate('1minus2minus3minus4'), '-8');
console.log(calculate('1plus2plus3minus4'), '2');