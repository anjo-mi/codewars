export function collision(x1: number, y1: number, r1: number, x2: number, y2: number, r2: number):boolean {
  const distOfOrigins:number = Math.sqrt( (x1-x2)**2 + (y1-y2)**2 );
  return distOfOrigins <= r1 + r2;
}