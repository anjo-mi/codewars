 
export const findClosestNum = (arr:Array<number | undefined>, i:number): number | undefined =>  {
  let j = i - 1;
  let k = i + 1;
  while ((arr[j] === undefined && arr[k] === undefined) && (j >= 0 || k < arr.length - 1)){
    j--;
    k++;
  }
  const left = arr[j];
  const right = arr[k];
  if (left === undefined) return right;
  if (right === undefined) return left;
  return Math.min(left,right);
}
​
export function fill(arr: Array<number | undefined>, method = 0): Array<number | undefined> {
  let curr = undefined;
  if (method === 1){
    for (let i = 0 ; i < arr.length ; i++){
      if (arr[i] !== undefined) curr = arr[i];
      arr[i] = curr;
    }
    return arr;
  }
  if (method === -1){
    for (let i = arr.length - 1 ; i >= 0 ; i--){
      if (arr[i] !== undefined) curr = arr[i];
      arr[i] = curr;
    }
    return arr;
  }else{
    const arr2: Array<number | undefined> = [];
    for (let i = 0 ; i < arr.length ; i++){
      if (arr[i] === undefined) arr2[i] = findClosestNum(arr,i);
      else arr2[i] = arr[i];
    }
    return arr2;
  }
  return arr;
}
​