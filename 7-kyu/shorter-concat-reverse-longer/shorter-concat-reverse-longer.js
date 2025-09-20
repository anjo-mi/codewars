 
const shorterReverseLonger = (a,b) => {
  const [long,short] = [a,b].sort((x,y) => y.length-x.length);
  return short + long.split('').reverse().join('') + short;
}