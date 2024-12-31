function capital(capitals){
    let arr = []
    for (let i = 0 ; i < capitals.length; i++){
      arr.push(`The capital of ${capitals[i].state || capitals[i].country} is ${capitals[i].capital}`)
    }
    return arr
  }

  function capital(capitals){
    return capitals.reduce((arr,el,i) => {
      arr.push(`The capital of ${capitals[i].state || capitals[i].country} is ${capitals[i].capital}`)
      return arr
    }, [])
  }

let state_capitals = [{state: 'Maine', capital: 'Augusta'}]
console.log(capital(state_capitals)[0], "The capital of Maine is Augusta");

let country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
console.log(capital(country_capitals)[0], "The capital of Spain is Madrid")

let mixed_capitals = [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
console.log(capital(mixed_capitals)[1], "The capital of Spain is Madrid")