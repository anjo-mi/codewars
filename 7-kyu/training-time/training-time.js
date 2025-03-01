function shuffleIt(arr,...pos){
  for (let [a,b] of pos){
    [ arr[a], arr[b] ] = [ arr[b], arr[a] ]
  }
  return arr;
}