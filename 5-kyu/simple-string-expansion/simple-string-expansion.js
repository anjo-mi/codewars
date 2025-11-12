function solve(str){
  const arab = new Set('123456789');
  const stack = [];
  for (const char of str){
    if (char in arab) stack.push(+char);
    else {
      if (char === ')'){
        let exp = '';
        while (stack.length && !arab.has(stack[stack.length-1])){
          const prevLastChar = stack.pop();
          exp = prevLastChar ? prevLastChar + exp : exp;
        }
        const n = stack.pop();
        stack.push(n ? exp.repeat(n) : exp);
      } else if (char !== '(') stack.push(char);
    }
  }
  return stack.join('');
}