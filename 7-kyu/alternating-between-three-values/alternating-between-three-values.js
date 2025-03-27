 
const f = (x, {a,b,c}) => x === a 
                           ? b
                         :x === b 
                           ? c 
                         :x === c 
                           ? a 
                           : -1;