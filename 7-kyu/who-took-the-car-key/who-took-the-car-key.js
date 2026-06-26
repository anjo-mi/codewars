 
function whoTookTheCarKey(message) {
  const chars = message
                  .map(bin => String.fromCharCode(parseInt(bin,2)))
                  .join('');
  return chars;
}