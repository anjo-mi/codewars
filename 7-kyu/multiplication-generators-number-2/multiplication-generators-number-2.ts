export function* generator(a: number): Generator<string> {
  let current: number = 0;
  
  while(true){
    current++;
    yield `${a} x ${current} = ${a * current}`;
  }
  
//   return `${a} x ${current} = ${a * current}`;
}