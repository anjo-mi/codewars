 
export function time(dist:number,boatSp:number,stream:String):number{
  const [direction, speed] = stream.split(' ');
  const dir:number = direction.startsWith('Down') ? 1 : -1;
  const sp: number = +speed * dir;
  return +(dist / (boatSp + sp)).toFixed(2);
}