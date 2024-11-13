function compose(f,g) {
    return function (...args){
      return f(g(...args))
    }
  }

  // const compose = (f,g) => (...a) => f(g(...a)s)


  let add1 = function(a){return a + 1}
  const id = function(a){return a}
  console.log( compose(add1,id)(0), 1 )
  
  add1 = function(a){return a + 1}
  const addAll3 = function(a,b,c){return a + b + c}
  console.log( compose(add1,addAll3)(1,2,3), 7 )
  