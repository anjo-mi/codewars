 
function expressionOut(expr) {
  const defs = {
    "+" : "Plus",
    "-" : "Minus",
    "*" : "Times",
    "/" : "Divided By",
    "**": "To The Power Of",
    "=" : "Equals",
    "!=": "Does Not Equal",
  }
  const nums = {
    1:"One",2:"Two",3:"Three",4:"Four",5:"Five",6:"Six",7:"Seven",8:"Eight",9:"Nine",10:"Ten"
  }
  const [a,op,b] = expr.split(' ');
  if (!(op in defs)) return `That's not an operator!`
  return `${nums[a]} ${defs[op]} ${nums[b]}`
}