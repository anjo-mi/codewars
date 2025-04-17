 
function part(x){
  const terms = ['Partridge','PearTree','Chat','Dan','Toblerone','Lynn','AlphaPapa','Nomad'];
  const total = x.reduce((a,el) => {
    if (terms.includes(el)) a++;
    return a;
  },0);
  return total > 0
            ? `Mine's a Pint` + '!'.repeat(total)
            : `Lynn, I've pierced my foot on a spike!!`;
}