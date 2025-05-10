 
function pointsNumber(r){
  if (r < 0) return 0;
  let count = 0;
  for (let i = -r ; i <= r ; i++){
    for (let j = -r ; j<=r ;j++){
      if (i**2 + j**2 <= r**2) count++;
    }
  }
  return count;
}