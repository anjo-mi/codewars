 
function pattern(n){
  const output = [];
  let i = 1;
  while ( i <=n ){
    let str = '';
    for (let j = i ; j <=n ; j++){
      str += j;
    }
    output.push(str);
    i++;
  }
  return output.join('\n');
}