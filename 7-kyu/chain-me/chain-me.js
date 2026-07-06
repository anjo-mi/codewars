 
const chain = (n,fns) => fns.reduce((a,fn) => fn(a) , n);