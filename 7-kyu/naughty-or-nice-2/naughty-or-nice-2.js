 
function whatListAmIOn(actions){
  let na = 0;
  let ni = 0;
  const bad  = new Set('bfk');
  const good = new Set('gsn');
  for (const phrase of actions){
    if (good.has(phrase[0])) ni++;
    if (bad.has( phrase[0])) na++;
  }
  return ni > na ? 'nice' : 'naughty';
}