 
function replaceAll(seq, find, replace) {
  return Array.isArray(seq) 
          ? seq.map(el => el === find ? replace : el) 
          : seq.replaceAll(find,replace);
}