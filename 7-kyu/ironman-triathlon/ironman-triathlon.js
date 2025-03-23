 
function iTri(s){
  if (s <= 0) return 'Starting Line... Good Luck!';
  const dist = 140.6;
  const rem = (dist - s).toFixed(2);
  if (rem <= 0) return `You're done! Stop running!`;
  const swim = {Swim: `${rem} to go!`};
  const bike = {Bike: `${rem} to go!`};
  const run  = {Run : `${rem} to go!`};
  const finish = {Run: `Nearly there!`}
  return +rem <= 10 
            ? finish 
        :+rem < 26.2
            ? run 
        :+rem < 138.2 
            ? bike 
        :+rem < 140.6 
            ? swim
            : 'ya done fucked up'
​
}