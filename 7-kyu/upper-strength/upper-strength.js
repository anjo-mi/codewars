 
function alexMistakes(kata, t){
  let freeTime = t - (kata * 6);
  let i = 0;
  let workout = 5;
  while (freeTime >= 0){
    freeTime -= workout;
    workout *= 2;
    i++;
  }
  return i - 1;
}