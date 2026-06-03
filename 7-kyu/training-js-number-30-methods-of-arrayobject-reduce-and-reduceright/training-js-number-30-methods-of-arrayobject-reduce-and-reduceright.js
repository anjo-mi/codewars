 
function tailAndHead(arr){
  const combos = [];
  for (let i = 0, j = i + 1; j < arr.length ; i++, j++){
    const [first,second] = [arr[i].toString(), arr[j].toString()];
    const tail = +first[first.length - 1];
    const head = +second[0];
    combos.push(head + tail);
  }
  return combos.reduce((a,el) => a * el, 1);
}