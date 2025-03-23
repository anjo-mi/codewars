 
function howManyGifts(max, gifts){
  const copy = gifts.slice(0).sort((a,b) => b-a);
  while (copy.length && max - copy.at(-1) >= 0){
    max -= copy.pop();
  }
  return gifts.length - copy.length;
}