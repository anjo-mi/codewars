function sabb(s, val, happiness){
    const word = 'sabticl'
    const els = s.split('').reduce((a,el) => {
      if (word.includes(el.toLowerCase())){
        a++
      }
      return a
    },0)
    console.log(els,val,happiness)
    return els + val + happiness > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
  }

console.log(sabb('Can I have a sabbatical?', 5, 5), 'Sabbatical! Boom!');
console.log(sabb('Why are you shouting?', 7, 2), 'Back to your desk, boy.'); 
console.log(sabb('What do you mean I cant learn to code??', 8, 9), 'Sabbatical! Boom!'); 
console.log(sabb('Please calm down', 9, 1), 'Back to your desk, boy.'); 