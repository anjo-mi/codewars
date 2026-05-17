 
function wordSearch(word, text){
  while (text.includes('.')){
    text = text.replace('.','');
  }
  while (text.includes(',')){
    text = text.replace(',','');
  }
  while (text.includes('!')){
    text = text.replace('!','');
  }
  while (text.includes('?')){
    text = text.replace('?','');
  }
  return text.split(' ').some(w => w === word);
}