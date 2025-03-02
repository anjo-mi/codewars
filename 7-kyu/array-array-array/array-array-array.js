function explode(x){
  const totalNums = x.reduce((a,el) => {
    if (typeof el === 'number' && el !== '.') a++;
    return a;
  }, 0);
  const score = totalNums === 2 
                  ? x[0] + x[1] 
               :totalNums === 1 
                  ? x.filter(el => typeof el === 'number' && el !== '.')[0] 
                  : null;
  return score === 0 
          ? [] 
        :score 
          ? Array(score).fill(x) 
          : 'Void!';
}