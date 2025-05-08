function counterfeitDollar(results){
  let coins = 'ABCDEFGHIJKL';
  const weights = {heavy:'',light:''};
  for (const weighing of results){
    let [left,right,res] = weighing.split(' ');
    if (res === 'even'){
      left.split('').forEach(el => {
        coins = coins.replace(el,'')
      });
      right.split('').forEach(el => {
        coins = coins.replace(el,'')
      });
    }else{
      for (const char of coins){
        if (!left.includes(char) && !right.includes(char)){
          coins = coins.replace(char, '');
        }
      }
      left.split('').forEach(el => {
        if (coins.includes(el)){
          if (res === 'up') weights.heavy += el
          else {weights.light += el}
        }
      })
      right.split('').forEach(el => {
        if (coins.includes(el)){
          if (res === 'up') weights.light += el
          else {weights.heavy += el}
        }
      })
    }
  }
  if (coins.length !== 1) return '???';
  let diff = null;
  for (const weight in weights){
    if (weights[weight].includes(coins)){
      return `${coins} is the counterfeit coin and it is ${weight}.`
    }
  }
}