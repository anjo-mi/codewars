 
function compose(...args) {
  return (n) => {
    while (args.length){
      n = args.pop()(n);
    }
    return n;
  }
}