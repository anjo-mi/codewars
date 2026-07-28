 
export function pointInCircle(x: number, y: number): boolean {
  const dist = Math.sqrt(x**2 + y**2);
  return dist < 1;
}