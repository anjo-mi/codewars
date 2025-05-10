 
function barista(c){
  c.sort((a,b) => a-b);
  let time = 0;
  let clean = 0;
  let wait = 0;
  let length = c.length - 1;
  c = c.map((el,i) =>{
    time += el;
    return time;
  })
  c = c.reduce((a,el) => a +el,0)
  while (length > 0){
    clean += 2;
    wait += clean;
    length--;
  }
  return c + wait;
}