function isSantaClausable(obj) {
    let methods = [ 'sayHoHoHo' , 'distributeGifts' , 'goDownTheChimney' ]
    if (typeof obj !== 'object' || !obj) return false
    return methods.every(el => {
          return el in obj && obj[el] instanceof Function
        })
  }

  var santa = {
    sayHoHoHo: function() { console.log('Ho Ho Ho!') },
    distributeGifts: function() { console.log('Gifts for all!'); },
    goDownTheChimney: function() { console.log('*whoosh*')},

    }
  var notSanta = { sayHoHoHo: function() { console.log('Oink Oink!') }}



  console.log(isSantaClausable(santa), true);
  console.log(isSantaClausable(notSanta), false);