 
function countSalutes(hall) {
  let count = 0;
  while(hall.includes('>')){
    let i = hall.indexOf('>');
    count += hall.slice(i).split('').reduce((a,el) => {
      if (el === '<') a++;
      return a;
    },0) * 2
    hall = hall.slice(i+1);
  }
  return count;
}