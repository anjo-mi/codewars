 
export function counter(): Function {
  let count = 0;
  return () => ++count;
};