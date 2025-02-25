function colourAssociation(arr){
  return arr.reduce((a,el) => {
    a.push( {[el[0]] : el[1]} );
    return a
  }, [])
}