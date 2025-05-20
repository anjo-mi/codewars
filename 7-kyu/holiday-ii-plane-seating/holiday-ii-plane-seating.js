 
function planeSeat(a){
  let row = '';
  let i = 0;
  while (!isNaN(a[i])){
    row += a[i];
    i++;
  }
  const seat = a[i];
  const section = +row < 21 ? 'Front'
                 :+row < 41 ? 'Middle'
                 :+row < 61 ? 'Back' : null;
  const seats = {A:'Left', B:'Left',C:'Left',D:'Middle',E:'Middle',F:'Middle',G:'Right',H:'Right',K:'Right',
                I:null,J:null};
  if (seats[seat] && section) return `${section}-${seats[seat]}`
  return 'No Seat!!';
}