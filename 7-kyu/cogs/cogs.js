 
function cogRpm(cogs) {
  let total = 1
  for (let i = 0 ; i < cogs.length - 1 ; i++){
    total *= ((cogs[i]) / (cogs[i+1])) * -1;
  }
  return total;
}