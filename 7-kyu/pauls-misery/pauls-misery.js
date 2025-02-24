function paul(x){
  const calcTotals = {
    kata: 5,
    ['Petes kata']: 10,
    life: 0,
    eating: 1,
  };
  const total = x.reduce((total,el) => total += calcTotals[el], 0);
  return total < 40 
          ? 'Super happy!' 
        :total <= 70 
          ? 'Happy!' 
        :total <= 100 
          ? 'Sad!' 
          : 'Miserable!';
}