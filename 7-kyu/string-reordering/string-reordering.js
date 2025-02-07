function sentence(objs) {
  let order = objs.reduce((a,el) => {
    a.push(Object.keys(el))
    return a
  }, []).map(el => Number(el[0]));
  order = order.sort((a,b) => a-b);
  const words = [];
  for (let i = 0 ; i < order.length ; i++){
    const word = objs.find(obj => obj.hasOwnProperty(order[i]));
    words.push(word[order[i]]);
  }
  return words.join(' ');
}