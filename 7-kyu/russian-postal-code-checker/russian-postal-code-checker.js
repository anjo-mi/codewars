 
function zipvalidate(code){
  const arabic = '1234567890';
  const invalid = '05789';
  for (let i = 0 ; i < code.length ; i++){
    if (!arabic.includes(code[i])) return false;
  }
  return code.length === 6 &&
         !invalid.includes(code[0]);
}