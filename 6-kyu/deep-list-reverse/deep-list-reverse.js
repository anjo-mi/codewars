function deepReverse(l){
  const revList = [];
  for (let i = l.length - 1 ; i >= 0 ; i--){
    if ( Array.isArray(l[i]) ){
      revList.push( deepReverse(l[i]) )
    }else{
      revList.push( l[i] )
    }
  }
  return revList;
}