 
function oddOrEven(n) {
  return !(n / 2 % 2) ? EVEN : 
         Number.isInteger(n / 2 % 2) ? ODD : EITHER;
}