 
function hexHash(code){
  const hex = code.split('').map(char => (char.charCodeAt(0)).toString(16) ).join('');
  const arabic = '0123456789';
  let total = 0;
  for (const char of hex){
    if (arabic.includes(char)) total += +char;
  }
  return total;
}