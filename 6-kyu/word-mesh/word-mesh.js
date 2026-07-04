const getMesh = (w1,w2) => {
  let maxStr = '';
  for (let i = 1 ; i < w2.length ; i++){
    const end = w1.slice(-i);
    const start = w2.slice(0,i);
    if ( w1 === 'pencilpapertypewritercomputer') console.log({start,end})
    if (start === end && start.length > maxStr.length) maxStr = start;
  }
  return maxStr;
}
​
const wordMesh = arr => {
  let res = '';
  console.log({arr})
  for (let i = 0 ; i < arr.length - 1 ; i++){
    const word = arr[i];
    const w = arr[i + 1];
    console.log({word,w,res})
    const mesh = getMesh(word,w);
    if (mesh.length) res += mesh;
    else return 'failed to mesh';
  }
  return res;
}