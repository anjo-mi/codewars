 
function add(...args) {
  const total = args.reduce((a,el,i) => a + (el / (i+1)), 0);
  return Math.round(total);
}