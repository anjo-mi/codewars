 
const add = (...args) => args.reduce((a,el,i) => a + (el * (i + 1)), 0);