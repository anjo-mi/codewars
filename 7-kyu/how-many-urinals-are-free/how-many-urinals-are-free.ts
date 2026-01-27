 
const ascertain = (urinals:string): boolean =>{
  let isTaken = false;
  for (const char of urinals){
    if (char === '1'){
      if (isTaken) return false;
      isTaken = true;
    }else isTaken = false;
  }
  return true;
}
​
const inbounds = (size:number,index:number): boolean => {
  if (index < 0 || index >= size) return false;
  return true;
}
​
const isFree = (urinals:string, i:number) : boolean => {
  const size = urinals.length;
  if (urinals[i] === '1') return false;
  if (inbounds(size,i-1) && urinals[i-1] === '1') return false;
  if (inbounds(size,i+1) && urinals[i+1] === '1') return false;
  return true;
}
​
export function getFreeUrinals(urinals: string,i:number = 0): number {
  if (!ascertain(urinals)) return -1;
  if (i === urinals.length) return 0;
  if (isFree(urinals,i)){
    const taken = urinals.slice(0,i) + '1' + urinals.slice(i+1);
    return Math.max(
      getFreeUrinals(taken,i+1) + 1,
      getFreeUrinals(urinals,i+1)
    );
  }
  return getFreeUrinals(urinals,i+1);
}