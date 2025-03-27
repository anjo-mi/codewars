 
function isolateIt(arr){
  const divideString = s => {
    const half = Math.floor(s.length/2);
    if (s.length % 2 === 0) return s.slice(0,half) + '|' + s.slice(half);
    return s.slice(0,half) + '|' + s.slice(half+1);
  };
  return arr.map(divideString);
  
}