 
var Calculator = {
  average: function(...args) {
    return args.length 
            ? args.reduce((a,el) => a + el, 0) / args.length
            : 0;
 }
};