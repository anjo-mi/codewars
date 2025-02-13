function factory(x){
  return function (a){
    return a.map(el => el * x);
  }
}