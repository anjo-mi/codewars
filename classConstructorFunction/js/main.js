function makeClass(...properties) {
    return class {
      constructor(...props){
        properties.forEach((el, i) => {
          this[el] = props[i]
        })
      }
    }
  }


  function Animal(name,species,age,health,weight,color) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.health = health;
    this.weight = weight;
    this.color = color;
  }
  const Animel = makeClass('name','species','age','health','weight','color')

  const dog1 = new Animal('Bob','Dog','5','good','50lb','brown')
  const dog2 = new Animel('Bob','Dog','5','good','50lb','brown')


console.log(Object.keys(dog1).join(`,`),Object.keys(dog2).join(`,`))
console.log(Object.values(dog1).join(`,`),Object.values(dog2).join(`,`))