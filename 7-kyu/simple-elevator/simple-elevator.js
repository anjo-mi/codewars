 
const isSafe = n => n >= 0 && n <= 3;
​
function goto(level,button){
  console.log({level, button})
  if (   !isSafe(+button) 
      || !isSafe(level) 
      || typeof level !== "number" 
      || typeof button !== "string"
      || !Number.isInteger(level)
      || button.length !== 1
     ) return 0;
  return +button - level;
}