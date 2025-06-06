 
function mobileKeyboard(str){
  const counts = {
    1: new Set(['1','2','3','4','5','6','7','8','9','0','*','#']),
    2: new Set(['a','d','g','j','m','p','t','w']),
    3: new Set(['b','e','h','k','n','q','u','x']),
    4: new Set(['c','f','i','l','o','r','v','y']),
    5: new Set(['s','z']),
  }
  let total = 0;
  for (const char of str) {
    for (const count in counts){
      if (counts[count].has(char)) total += +count;
    }
  }
  return total;
}