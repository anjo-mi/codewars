 
// takes a string mixed with letters, numbers, operators STRING
// return the numbers operated accordingly on one another NUMBER
// 'dsfdsg54bfbb1fxbf*10fvf0fbdgbfhj' ==> 541 * 100 ==> '54100' (Rounded integer as string)
​
// iterate thru string, if arabic has num, add it to string number
// when an operator appears
//      push num to equation
//      clear num
//      push op to array
//    continue iteration
// make an object with operations as methods
// call operationsObject with equation[1] and arguments +eq[0] and +num
//      RETURN ^^^^^
​
​
function calculateString(st){
  let num = '';
  let arabic = '0123456789.'
  let ops = '+-*/';
  const equation = [];
  const operations = {
    '+': (a,b) => a+b, '-': (a,b) => a-b, '*': (a,b) => a*b, '/': (a,b) => a/b
  };
  for (const char of st){
    if (arabic.includes(char)) num += char;
    if (ops.includes(char)){
      equation.push(num,char);
      num = '';
    }
  }
  return Math.round(operations[equation[1]](+equation[0], +num)).toString();
}