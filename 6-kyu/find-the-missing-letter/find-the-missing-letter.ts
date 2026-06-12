 
export function findMissingLetter(arr: [string, string, ...string[]]) : string {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const start:number = alpha.indexOf(arr[0].toLowerCase());
  for (let i = 1 , j = start + 1 ; i < arr.length ; i++, j++){
    if (arr[i].toLowerCase() !== alpha[j]) return arr[i] === arr[i].toLowerCase() ? alpha[j] : alpha[j].toUpperCase();
  }
  return '';
}