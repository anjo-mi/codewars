 
let getQuote = function(quotes, hero){
  const arab = new Set('0123456789');
  const pos = hero.split('').filter(el => arab.has(el))[0];
  const ppl = { B: 'Batman', R: "Robin", J: "Joker" };
  return `${ppl[hero[0]]}: ${quotes[pos]}`;
}
​