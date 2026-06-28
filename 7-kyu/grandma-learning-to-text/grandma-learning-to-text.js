 
function textin(s){
  const twos = {'too':null, 'to':null, 'two':null};
  for (const two in twos){
    for (let i = 0 ; i < s.length ; i++){
      const part = s.slice(i,i+two.length).toLowerCase();
      if (part === two){
        s = s.split('');
        s.splice(i,two.length,'2');
        s = s.join('');
      }
    }
  }
  return s;
}