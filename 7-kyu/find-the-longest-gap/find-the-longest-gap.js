 
function gap(num) {
  let maxGap = 0;
  let currGap = 0;
  let inGap = false;
  const bin = num.toString(2);
  for (const char of bin){
    if (!inGap && char === '1') inGap = true;
    else if(inGap && char === '1'){
      maxGap = Math.max(maxGap,currGap);
      currGap = 0;
    }else if(inGap && char === '0') currGap++;
  }
  return maxGap;
}