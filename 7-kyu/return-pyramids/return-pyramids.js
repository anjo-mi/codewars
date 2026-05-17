 
function pyramid(n){
  const arr = Array(n).fill(null).map(el => Array((n % 2 ? n*2+1 : n * 2)).fill(null).map(e => ' '));
  for (let i = 0 ; i < arr.length ; i++){
    for (let j = 0 ; j < arr[i].length ; j++){
      const less = n - i - 1;
      const more = n + i;
      if (j === less) arr[i][j] = '/';
      else if (j === more) arr[i][j] = '\\';
      else if (i === arr.length - 1) arr[i][j] = '_'
    }
    const ind = arr[i].indexOf('\\');
    arr[i] = arr[i].slice(0,ind + 1);
  }
  return arr.map(el => el.join('')).join('\n') + '\n';
}