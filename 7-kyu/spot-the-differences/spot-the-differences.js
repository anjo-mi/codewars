 
function spot(s1,s2){
  return s1.split('').reduce((pos,char,i) => {
    if (char !== s2.split('')[i]) pos.push(i);
    return pos;
  }, []);
}