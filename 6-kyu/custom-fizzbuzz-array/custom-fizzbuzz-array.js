 
var fizzBuzzCustom = function(str1='Fizz', str2='Buzz', n1=3, n2=5) {
  const str3 = str1+str2;
  const n3 = n1*n2;
  const results = [];
  for ( let i = 1 ; i < 101 ; i++){
    switch (true){
        case !(i % n3) : results.push(str3); break;
        case !(i % n2) : results.push(str2); break;
        case !(i % n1) : results.push(str1); break;
        default : results.push(i);
    }
  }
  return results;
};