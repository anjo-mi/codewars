 
const lastDigit = (n, d) => d <= 0 
                              ? [] 
                              : n.toString().split('').map(Number).slice(-d);