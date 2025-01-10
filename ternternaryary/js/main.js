function multiple(x) {
    return !(x % 15) ? 'BangBoom' : 
           !(x % 5)  ? 'Boom'     : 
           !(x % 3) ? 'Bang'      : 'Miss'
  }

  console.log(multiple(30), "BangBoom")
  console.log(multiple(3), "Bang")
  console.log(multiple(98),"Miss")
  console.log(multiple(65),"Boom")
  console.log(multiple(23),"Miss")
  console.log(multiple(15),"BangBoom")