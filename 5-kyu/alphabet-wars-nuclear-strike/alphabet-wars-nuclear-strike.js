 
function alphabetWar(battlefield) {
  if (!battlefield.includes('#')) return battlefield.split('').filter(char => char !== '[' && char !== ']').join('');
  const shelters = [{letters:'', nukes:0}];
  let i = 0;
  let inShelter = false;
  let survivors = '';
  for (const char of battlefield){
    if (char === '[') inShelter = true;
    if (char === ']'){
      inShelter = false;
      shelters.push({letters:'',nukes:0});
      i++;
    }
    if (inShelter && char !=='[') shelters[i].letters += char;
    if (char === '#'){
      shelters[i].nukes++;
      if (shelters[i-1]) shelters[i-1].nukes++;
    }
  }
  for (const shelter of shelters){
    if (shelter.nukes <= 1) survivors += shelter.letters;
  }
  return survivors;
}
​
/**
ASSUMING WE'LL NEVER HAVE A DOUBLE FORTIFIED SHELTER
ASSUMING WE'LL NEVER HAVE A NUKE INSIDE A SHELTER
create an array of shelter object [{letters: '', nukes: 0}]
let i = 0;
let inshelter = false;
for every character of string{
  if (char === '[') inshelter = true;
  if (char === ']') inshelter = false; shelters.push({letters:'', nukes: 0}) ; i++;
  if inshelter shelter[i] letters += char; continue;
  if (char === '#'){
    shelters i and shelters[i-1] (<- if it exists) nukes++;
  }
}
let survivors = '';
for shelter of shelters if shelters.nukes <= 1 survivors += shelter.letters
*/