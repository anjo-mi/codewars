function Warrior(n){
    let x = n.toLowerCase()
    return x = {
      firstName : n,
      name : function(n){
        if (n) this.firstName = n
        return this.firstName
      },
      toString : function(){
        return `Hi! my name's ${this.firstName}`
      }
    }
  }

var albert = new Warrior("Albert")
var boris  = new Warrior("Boris")

console.log(albert.toString(),"Hi! my name's Albert");
console.log(albert.name(),"Albert");
console.log(boris.name(),"Boris");

boris.name("Bobo")
console.log(boris.name(),"Bobo");

