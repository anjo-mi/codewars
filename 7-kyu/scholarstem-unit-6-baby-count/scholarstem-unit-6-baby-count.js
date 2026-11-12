 
function countName(names, name){
  return names.reduce((ct,nm) => ct + (nm === name ? 1 : 0), 0);
};