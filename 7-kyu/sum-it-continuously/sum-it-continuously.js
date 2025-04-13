 
function add(arr) {
  return arr.map((el,i) => {
    if (i === 0) return el;
    else{return el + arr.slice(0,i).reduce((a,e) => a + e, 0)}
  })
}