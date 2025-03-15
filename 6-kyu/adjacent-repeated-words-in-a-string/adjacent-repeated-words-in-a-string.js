 
function countAdjacentPairs(str) {
  let count = 0;
  str = str.split(' ');
  let temp = [ str[0] ];
  for (let i = 1 ; i < str.length ; i++){
    temp[i] = str[i];
    if (!temp[i-2] && temp[i].toLowerCase() === temp[i-1].toLowerCase()) count++;
    else if (temp[i].toLowerCase() === temp[i-1].toLowerCase() && 
       temp[i-2].toLowerCase() !== temp[i].toLowerCase()) count++;
  }
  return count;
}