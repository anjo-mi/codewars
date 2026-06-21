 
export function closest(str: string): number[][] {
  const nums = str.split(' ');
  const weights = nums.map(num => num.split('').reduce((a,el) => a += +el, 0));
  console.log({nums,weights});
  let index1:number = -1;
  let index2:number = -1;
  let closest:number = Infinity;
  for (let i = 0 ; i < weights.length ; i++){
    for (let j = i + 1 ; j < weights.length ; j++){
      const diff = Math.abs(weights[i] - weights[j]);
      if (diff < closest){
        closest = diff;
        index1 = i;
        index2 = j;
      }
      if (diff === closest){
        if (weights[i] + weights[j] === weights[index1] + weights[index2]){
          if (i + j < index1 + index2){
            index1 = i;
            index2 = j;
          }
        }else if (weights[i] + weights[j] < weights[index1] + weights[index2]){
          index1 = i;
          index2 = j;
        }
      }
    }
  }
  if (index1 < 0 || index2 < 0) return [];
  return [
    [+weights[index1], index1, +nums[index1]],
    [+weights[index2], index2, +nums[index2]],
  ].sort((a,b) => a[0] - b[0] || a[1] - b[1]);
}