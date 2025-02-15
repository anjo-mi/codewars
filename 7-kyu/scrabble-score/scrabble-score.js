 
function scrabbleScore(str){
  const scores = {
    1: ['a','e','i','o','u','l','n','r','s','t'],
    2: ['d','g'],
    3: ['b','c','m','p'],
    4: ['f','h','v','w','y'],
    5: ['k'],
    8: ['j','x'],
    10: ['q','z']
  };
  return str.split('').reduce((a,el) => {
    for (let key in scores){
      if (scores[key].includes(el.toLowerCase())){
        a += +key;
      }
    }
    return a;
  }, 0);
}