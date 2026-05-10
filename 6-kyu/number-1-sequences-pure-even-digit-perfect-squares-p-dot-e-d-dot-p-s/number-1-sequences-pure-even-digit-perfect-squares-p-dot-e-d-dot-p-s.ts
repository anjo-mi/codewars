 
export const allEvenDigits = (n:number):boolean => {
  const digits:number[] = n.toString().split('').map(Number);
  return digits.every(dig => !(dig % 2))
}
​
export const isPerfectSquare = (n:number):boolean => {
  return Number.isInteger(Math.sqrt(n));
}
​
export const evenDigitSquares = (a: number, b: number): number[] => {
  const res:number[] = [];
  for (let i:number = a + 1 ; i <= b ; i++){
    if (allEvenDigits(i) && isPerfectSquare(i)) res.push(i);
  }
  return res;
}