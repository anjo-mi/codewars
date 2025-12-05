 
const drome = (n,set = new Set()) => {
  n = n.toString();
  if (n.length <= 1) return true;
  const first = n[0];
  const last = n[n.length - 1];
  return first === last
          ? drome(n.slice(1,-1))
          : false;
}
​
function palindrome(num, arr= new Set(),d=0) {
  if (typeof num !== 'number' && !d) return 'Not valid';
  else if (num < 0) return 'Not valid';
  else if (!d && !Number.isInteger(num)) return 'Not valid';
  num = num.toString();
  
  const first = num[0];
  const last = num[num.length - 1];
  
  if (first === last && num.length > 2) {
    arr.add(num.slice(1,-1));
    palindrome(num.slice(1,-1), arr, d+1);
  }
  if (num.length > 2) {
    arr.add(num.slice(1));
    palindrome(num.slice(1), arr, d+1);
  }
  if (num.length > 2) {
    arr.add(num.slice(0,-1));
    palindrome(num.slice(0,-1), arr, d+1);
  }
  
  return Array.from(arr).filter(num => num.length > 1).some(num => drome(num));
}