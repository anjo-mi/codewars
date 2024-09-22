function spacey(arr) {
    let newArr = []
    for ( let i = 0 ; i < arr.length ; i++){
      newArr.push(arr.slice(0,i+1).join(''))
    }
    return newArr
  }

console.log(spacey(['kevin', 'has','no','space']), ['kevin',
                                                             'kevinhas',
                                                             'kevinhasno',
                                                             'kevinhasnospace'])
console.log(spacey(['this', 'cheese', 'has', 'no', 'holes']), ['this',
                                                                        'thischeese',
                                                                        'thischeesehas',
                                                                        'thischeesehasno',
                                                                        'thischeesehasnoholes'])