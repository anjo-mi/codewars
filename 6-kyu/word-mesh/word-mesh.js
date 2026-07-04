 
const getMesh = (w1,w2) => {
  for (let i = 0 ; i < w1.length ; i++){
    const end = w1.slice(i);
    if (w2.startsWith(end)) return end;
  }
  return '';
}
​
function wordMesh(arr){
  let res = '';
  for (let i = 0 ; i < arr.length - 1; i++){
    const mesh = getMesh(arr[i], arr[i+1]);
    if (!mesh) return 'failed to mesh';
    res += mesh;
  }
  return res;
  
}