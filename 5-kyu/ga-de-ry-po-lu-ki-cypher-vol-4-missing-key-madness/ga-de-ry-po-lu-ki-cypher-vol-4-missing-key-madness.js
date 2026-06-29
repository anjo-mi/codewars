const keys = {
  'agdeikluopry': {},
  'akerilnuopty': {},
  'akceimnuotwy': {},
  'amceinkorytu': {},
  'azbuerhoikwy': {},
  'abelikjuowty': {},
  'alerguimnowy': {},
}
​
for (const key in keys){
  for (let i = 0 ; i < key.length ; i+= 2){
    const first = key[i].toLowerCase();
    const second = key[i+1].toLowerCase();
    keys[key][first] = second;
    keys[key][second] = first;
  }
}
​
function encode(str,key) {
  const board = keys[key];
  return str.split('').map(char => {