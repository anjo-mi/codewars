 
function testit(s){
  const arabic = 'abcdefghijklmnopqrstuvwxyz';
  if (s.length <=1) return s;
  let result = '';
  for (let i = 0 ; i < s.length ; i+=2){
    if (i === s.length - 1){
      result += s[i];
      break;
    }
    const [i1,i2] = [arabic.indexOf(s[i]),arabic.indexOf(s[i+1])]
    let index = Math.floor( (i1+i2) / 2);
    result += arabic[index];
  }
  return result;
}