 
function matrix(arr) {
  return arr.map((nest,ind) => {
    return nest.map((el,i) => {
      if (i === ind){
        if(el < 0) return 0;
        else{return 1}
      }
      return el;
    })
  })
}