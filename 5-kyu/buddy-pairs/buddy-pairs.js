function buddy(start,limit) {
  function sum(n){
    const arr = [];
    for (let i = 1 ; i <= Math.sqrt(n) ; i++){
      if (n % i === 0){
        if (i !== n / i){
          arr.push(i, n / i);
        }else{
          arr.push(i)
        }
      }
    }
    return arr.reduce((a,el) => a + el, 0) - n;
  }
  const arr = [];
  for (let i = start ; i <= limit ; i++){
    const check = sum(i) - 1;
    if (sum(check) - 1 === i && check > i){
      arr.push(i, check);
    }
  }
  return arr.length ? arr.slice(0,2) : 'Nothing';
}