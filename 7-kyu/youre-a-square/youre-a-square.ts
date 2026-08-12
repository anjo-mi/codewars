export default function isSquare(n: number): boolean {
  return n >= 0 && Number.isInteger(Math.sqrt(n)) || n === 0;
};
​