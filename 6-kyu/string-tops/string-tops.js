 
function tops(msg) {
  let tips = '';
  let count = 1;
  let turn = 1;
  while (count <= msg.length - 1){
    tips = msg[count] + tips;
    turn  += 4
    count += turn;
  }
  return tips;
}