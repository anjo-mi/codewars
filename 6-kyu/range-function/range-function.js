 
let range = (a,b,c) => {
  let start,end,step
  if (b && !c){
    start = a;
    end = b;
    step = 1;
  }else if(!b && !c){
    start = 1;
    end = a;
    step = 1;
  }else{
    start = a;
    step = b;
    end = c;
  }
  const arr = [];
  for (let i = start ; i <= end ; i += step){
    arr.push(i)
  }
  return arr;
}