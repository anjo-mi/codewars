 
function olympicRing(a){
  const points = {a:1,A:1,b:1,B:2,D:1,d:1,e:1,g:1,o:1,O:1,p:1,P:1,q:1,Q:1,R:1};
  let total = 0;
  for (const char of a){
    total += points[char] || 0;
  }
  total = Math.floor(total/2);
  return  total > 3 ? 'Gold!' : 
          total > 2 ? 'Silver!' : 
          total > 1 ? 'Bronze!' : 'Not even a medal!';
}