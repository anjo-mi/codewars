 
function strCount(obj){
  let count = 0;
  for (const key in obj){
    if (typeof obj[key] === 'string') count++;
    if (typeof obj[key] === 'object') count+= strCount(obj[key]);
  }
  return count;
}