 
function orderWord(s){
  if (!s) return 'Invalid String!'
  return s.split('').sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
}