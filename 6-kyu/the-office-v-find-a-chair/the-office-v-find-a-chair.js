 
function meeting(x, need){
  if (!need) return 'Game On';
  const takable = x.map((el) => el[1] > el[0].length ? el[1] - el[0].length : 0);
  const takenFromRoom = [];
  for (let i = 0 ; i < takable.length ; i++){
    takenFromRoom.push(Math.min(need,takable[i]));
    need -= takable[i];
    if (need <= 0) return takenFromRoom;
  }
  return 'Not enough!'
}