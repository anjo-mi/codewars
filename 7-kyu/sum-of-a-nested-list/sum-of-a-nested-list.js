 
const sumNested = arr => {
  return arr.flat(Infinity).reduce((a,el) => a+el,0);
};