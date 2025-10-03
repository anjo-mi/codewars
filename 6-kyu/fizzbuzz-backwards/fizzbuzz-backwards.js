 
function reverseFizzBuzz(arr) {
  const f  = arr.indexOf('Fizz') + 1;
  const b  = arr.indexOf('Buzz') + 1;
  const fb = arr.indexOf('FizzBuzz') + 1;
    
  if (f && fb && !b) return [f,fb];
  if (fb && !f && !b) return [fb,fb];
  return [f,b];
}