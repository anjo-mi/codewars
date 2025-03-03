function isReoccuring(items){
  const sequenced = [];
  let current = null;
  for (let i = 0 ; i < items.length ; i++){
    if (sequenced.includes(items[i]) && current !== items[i]){
      return true;
    }
    current = items[i]
    if ( !sequenced.includes(current) ){
      sequenced.push(current)
    }
  }
  return false;
}