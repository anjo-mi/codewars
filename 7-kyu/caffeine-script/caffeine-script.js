 
function caffeineBuzz(n) {
  return !(n % 12) ? 'CoffeeScript'
        :!(n %  6) ? 'JavaScript'
        :!(n %  3) ? 'Java' : 'mocha_missing!';
}