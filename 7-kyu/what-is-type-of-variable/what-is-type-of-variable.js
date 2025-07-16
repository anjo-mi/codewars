 
const type = (val) => {
  const [toss, alter] = (Object.prototype.toString.call(val)).split(' ');
  return alter[0].toLowerCase() + alter.slice(1,-1);
  
}