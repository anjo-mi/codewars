 
function bears(x, s){
  const valid = '8B';
  let temp = '';
  let pairs = [];
  for (let i = 0 ; i < s.length ; i++){
    if (valid.includes(s[i]) && !temp){
      temp += s[i];
      continue;
    }
    if (valid.includes(s[i]) && temp){
      if (temp !== s[i]){
        pairs.push(temp+s[i]);
        temp = '';
        continue;
      }else if(temp === s[i]) continue;
    }
    if (temp && !valid.includes(s[i])) temp = '';
  }
  pairs = pairs.join('');
  return [ pairs , pairs.length >= x * 2 ];
}