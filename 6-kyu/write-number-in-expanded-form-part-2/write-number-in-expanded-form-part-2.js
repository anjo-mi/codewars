 
function expandedForm(num) {
  let [first, rem] = num.toString().split('.');
  
  first = first.split('').map((el,i) =>{
    if (el !== '0') return `${el}${'0'.repeat(first.length - i - 1)}`
  }).filter(Boolean);
  
  rem = rem.split('').map((el,i) =>{
    if (el !== '0') return `${el}/1${'0'.repeat(i + 1)}`
  }).filter(Boolean);
  
  return first.concat(rem).join(' + ');
}