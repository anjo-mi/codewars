const sumNested = arr => {
  if (Array.isArray(arr)){
    return arr.reduce((a,el) => {
      return a + sumNested(el);
    }, 0);
  }
  return arr;
};


const sumNested = arr => {
  return arr.flat(Infinity).reduce((a,el) => a+el,0);
};
