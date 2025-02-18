 
function mirror(data) {
  const copy = data.slice(0);
  const mirror = [];
  let i = 0;
  while (copy.length){
    const [max] = copy.splice(copy.indexOf( Math.max(...copy) ), 1);
    if (i !== 0){
      mirror.push(max);
      mirror.unshift(max);
    }else{
      mirror.push(max);
    }
    i++;
  }
  return mirror;
}