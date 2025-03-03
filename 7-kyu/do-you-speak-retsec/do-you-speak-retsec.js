 
function reverseByCenter(s){
  const middleIndex = Math.floor(s.length / 2);
  s = s.split('');
  const middle = s.length % 2 === 0 ? null : s.splice(middleIndex,1);
  
  return middle 
          ? s.slice(-middleIndex).concat(middle).concat(s.slice(0,middleIndex)).join('')
          : s.slice(-middleIndex).concat(s.slice(0,middleIndex)).join('');
}