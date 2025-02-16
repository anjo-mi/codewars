 
function alienLanguage(str){
  return str.split(' ')
            .map(el => 
                el.toUpperCase()
                  .slice(0, el.length -1) + el[el.length - 1].toLowerCase())
            .join(' ');
}