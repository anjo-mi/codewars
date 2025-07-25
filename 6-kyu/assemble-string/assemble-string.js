const decode = (a1,a2) => {
  for (let i = 0 ; i < a1.length ; i++){
    if (a1[i] !== '*') continue;
    if (a2[i] !== '*') a1[i] = a2[i];
  }
  return a1;
}
​
function assembleString(arr){
  if (!arr.length) return '';
  arr = arr.map(el => el.split(''));
  let actual = arr[0];
  const res = arr.reduce(decode,actual);
  return res.map(char => char === '*' ? '#' : char).join('');
}