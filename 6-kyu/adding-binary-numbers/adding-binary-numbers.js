 
function add(a,b){
  let result = "",
      i = a.length - 1,
      j = b.length - 1,
      carry = 0;
  while (i >= 0 || j >= 0 || carry > 0) {
    const bitA = i >= 0 ? parseInt(a[i], 10) : 0;
    const bitB = j >= 0 ? parseInt(b[j], 10) : 0;
    const sum = bitA + bitB + carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
    i--;
    j--;
  }
  while (result.startsWith('0') && result.length > 1) result = result.slice(1);
  return result;
}