 
function smallest(n) {
  const numStr = n.toString();
  let lowest = n;
  let result = [n,0,0];
  
  for (let i = 0 ; i < numStr.length ; i++){
    const digit = numStr[i];
    for (let j = 0 ; j < numStr.length ; j++){
      if (i === j) continue;
      
      const newNumArray = numStr.split('');
      newNumArray.splice(i, 1);
      newNumArray.splice(j, 0, digit);
      const possLow = parseInt(newNumArray.join(''));
      
      if (possLow < lowest || 
         (possLow === lowest && ( i < result[1] || 
                                ( i === result[1] && j < result[2])) ) ){
        lowest = possLow;
        result = [lowest, i, j];
      }
    }
  }
  return result;
}