 
function alternate(n, first, sec){
  const arr = [];
  for (let i = 0; i <= n - 1 ; i++){
    if (i % 2 === 0){
      arr.push(first)
    }
    if (i % 2 === 1){
      arr.push(sec)
    }
  }
  return arr
}