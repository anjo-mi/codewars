function anagramDifference(w1,w2){
   const wr1 = w1.split('').reduce((a,el) => {
     a[el] = (a[el] || 0) + 1;
     return a;
   },{});
   const wr2 = w2.split('').reduce((a,el) => {
     a[el] = (a[el] || 0) + 1;
     return a;
   },{});
  let removed = 0;
  for (const char in wr1){
    if (wr2[char] && wr1[char] !== wr2[char]){
      removed += Math.abs(wr1[char] - wr2[char]);
      delete wr2[char];
    }else if(!wr2[char]){
      removed += wr1[char]
    }
  }
  for (const char in wr2){
    if (wr1[char] && wr1[char] !== wr2[char]){
      removed += Math.abs(wr1[char] - wr2[char]);
      delete wr1[char];
    }else if(!wr1[char]){
      removed += wr2[char]
    }
  }
  return removed;
}
​