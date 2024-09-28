function crap(x, bags, cap){
    let craps = x.reduce((a,el) => {
      if (el.includes('D')) return 'Dog!!'
      a += el.reduce((acc, item) => {
        if (item === '@'){
          acc += 1
        }
        return acc
      }, 0)
      return a
    }, 0)
    return isNaN(craps)       ? 'Dog!!'  : 
           craps > bags * cap ? 'Cr@p'   : 'Clean'
  }


  console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2), "Clean");
  console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1), "Cr@p");
  console.log(crap([['_','_'], ['_','@'], ['D','_']], 2, 2), "Dog!!");