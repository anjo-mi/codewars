class Player {
    constructor(name) {
      this.name = name
      this.health = 100
      this.position = { x:0 , y:0 }
      this.damage = 10
      this.luck = 1
    }
  }
  
  
  class Game {
    constructor(name,level){
      this.player = new Player(name)
      this.name = name
      this.floors = []
      this.level = 0
      if (typeof level === 'number'){
        this.level = level 
      }else{
        level = parseInt(level,10)
        this.level = level
      }
    }
    getPlayer(){
      return this.player instanceof Player ? this.player : new Player(this.name);
    }
    
    getLevel(){
      return this.level
    }
    
    incrementLevel(){
      this.level = (this.level || 0) + 1
    }
    
  }
  
  
  class Monster {
    constructor(level) {
      this.level = level
    }
  }
  
  class Map {
    constructor(level) {
      this.level = level
    }
  }
  

var game = new Game('Leeroy', 0)
console.log(game.level, 0,'Game level should = 0');
console.log(game.floors, [],'Game floors should be an empty array')
console.log(game.player.name, 'Leeroy', 'Game player name should = Leeroy');
console.log(game.player.health, 100.00, 'Game player health should = 100.00');
console.log(game.player.position, {x:0,y:0}, 'Game player position should = {x:0, y:0}');
console.log(game.player.damage, 10.00, 'Game player damage should = 10.00');
console.log(game.player.luck, 1.00, 'Game player luck should = 1.00');

let mon = new Monster(0);
console.log(mon.level, 0, 'Monster level should equal 0')
let map = new Map(0);
console.log(map.level, 0, 'Map level should equal 0')