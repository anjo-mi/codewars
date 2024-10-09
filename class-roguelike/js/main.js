class Character {
  
    constructor(obj){
      this.name = obj.name || 'Hero'
      this.strength = obj.strength || 10
      this.dexterity = obj.dexterity || 10
      this.intelligence = obj.intelligence || 10
      this.weapon = new Weapon(0,0,0,0, 'limbs')
      this.inventory = [this.weapon]
      this.log = []
      return new Proxy(this, {
        get(target, prop, rec){
          if (prop in target){
            return target[prop]
          }
          if (typeof prop === 'string' && !target[prop] && prop.includes('Of')){
            return function(str,dex,int,pow){
              let weaponName = prop.split('')
              let indeces = []
              for (let i = 1 ; i < weaponName.length ; i++){
                if ( weaponName[i] === weaponName[i].toUpperCase() ){
                  indeces.push(i)
                }
              }
              if (indeces.length !== 2) throw new Error('invalid weapon specification')
              weaponName.splice(indeces[0] , 1 , ' ', weaponName[indeces[0]].toLowerCase())
              weaponName.splice(indeces[1] + 1 , 1 , ' ', weaponName[indeces[1] + 1].toLowerCase())
              weaponName = weaponName[0].toUpperCase() + weaponName.slice(1).join('')
              target.weapon = new Weapon(str,dex,int,pow,weaponName)
              target.log.push(`${target.name} finds '${target.weapon.name}'`)
              let x = target.inventory.find(el => !el.name.includes('(enhanced)') && 
                                                  el.name === (target.weapon.name || 
                                                               target.weapon.name + '(enhanced)'))
              let ind = target.inventory.indexOf(x)
              if (ind === -1){
                target.inventory.push(target.weapon)
                return target.weapon
              }
              target.weapon = new Weapon( Math.max(target.weapon.str, target.inventory[ind].str) ,
                                          Math.max(target.weapon.dex, target.inventory[ind].dex) ,
                                          Math.max(target.weapon.int, target.inventory[ind].int) ,
                                          Math.max(target.weapon.pow, target.inventory[ind].pow) ,
                                          target.weapon.name + '(enhanced)')
              target.inventory.push(target.weapon)
              target.inventory.splice(ind,1)
              target.chooseWeapon(target.inventory)
              return target.weapon
            }
          }else if(typeof prop === 'string' && !target[prop] && !prop.includes('Of')){
            return function(a,b,c){
              console.log(target.strength, target.dexterity, target.intelligence)
              a = +a || 0
              b = +b || 0
              c = +c || 0
              
              let eventName = prop.split('')
              
              let num = -1
              
              for (let i = 0 ; i < eventName.length ; i++){
                if (eventName[i] === eventName[i].toUpperCase()){
                  num = i
                }
              }
              if (num < 1) throw new Error(`invalid event occurring`)
              eventName[num] = eventName[num].toLowerCase()
              eventName.splice(num, 0, ' ')
              eventName = eventName[0].toUpperCase() + eventName.slice(1).join('')
              
              let newName = []
              if (a) newName.push(`strength ${a > 0 ? '+' + a : a}`)
              if (b) newName.push(`dexterity ${b > 0 ? '+' + b : b}`)
              if (c) newName.push(`intelligence ${c > 0 ? '+' + c : c}`)
              target.strength = target.strength + a
              target.dexterity = target.dexterity + b
              target.intelligence = target.intelligence + c
              
              target.log.push(`${eventName}: ${newName.join(', ')}`)
              target.chooseWeapon(target.inventory)
              console.log(prop, a + ' > ' + target.strength, b + ' > ' +  target.dexterity, c + ' > ' +  target.intelligence)
              console.log(target.log)
              return target
            }
          }
        }
      })
    }
  
    characterInfo() {
      this.chooseWeapon(this.inventory)
      let damage = this.strength + this.intelligence + this.dexterity
      if (this.weapon instanceof Weapon && this.weapon.name !== 'limbs'){
        damage = this.weapon.str * this.strength + 
                 this.weapon.dex * this.dexterity + 
                 this.weapon.int * this.intelligence + 
                 this.weapon.pow
      }
      if (this.weapon.name === 'limbs'){
        damage = this.strength + this.dexterity + this.intelligence
      }
      return [ this.name, 
               'str ' + this.strength , 
               'dex ' + this.dexterity , 
               'int ' + this.intelligence , 
               this.weapon.name + ' ' + damage + ' dmg' ].join('\n')
    }
    
    
    
    function (str = 0, dex = 0, int = 0, pow = 0){
      this.weapon = new Weapon(str,dex,int,pow)
      this.log.push(`${ this.name } finds ${ this.weapon.name }`)
      this.chooseWeapon(this.inventory)
      
    }
    
    chooseWeapon(arr){
      if (arr == []) return
      arr.sort((a,b) => {
        let x = (a.str * this.strength + 
                 a.dex * this.dexterity + 
                 a.int * this.intelligence + 
                 a.pow) 
        let y = (b.str * this.strength + 
                 b.dex * this.dexterity + 
                 b.int * this.intelligence + 
                 b.pow)
        if (x !== y){
          return y - x
        }
        return a.name.localeCompare(b.name)
      })
      this.weapon = arr[0]
        
               
    }
    
    eventLog() {
      return this.log.join('\n')
    }
    
  }
  
  
  class Weapon{
    constructor(str, dex, int, pow, name){
      this.str = str
      this.dex = dex
      this.int = int
      this.pow = pow
      this.name = name
    }
    
  }


  function runTests() {
    console.log("Running Sample Tests");
  
    function assertEqual(actual, expected, message) {
      if (actual !== expected) {
        throw new Error(`${message || 'Assertion failed'}: expected "${expected}", but got "${actual}"`);
      }
    }
  
    function test1() {
      console.log("\nTest 1: New character");
      const test = new Character({name: 'Kroker', strength: 15, intelligence: 7});
      const res = `Kroker\nstr 15\ndex 10\nint 7\nlimbs 32 dmg`;
      assertEqual(test.toString(), res, "Test 1 failed");
      console.log("Test 1 passed");
    }
  
    function test2() {
      console.log("\nTest 2: Character finds weapon");
      const test = new Character({name: 'Kroker', strength: 15, intelligence: 7});
      test.axeOfFire(3, 1, 0, 20);
      const res = `Kroker\nstr 15\ndex 10\nint 7\nAxe of fire 75 dmg`;
      assertEqual(test.toString(), res, "Test 2 failed");
      console.log("Test 2 passed");
    }
  
    function test3() {
      console.log("\nTest 3: Character finds second weapon");
      const test = new Character({name: 'Kroker', strength: 15, intelligence: 7});
      test.axeOfFire(3, 1, 0, 20);
      test.staffOfWater(1, 0, 2, 60);
      const res = `Kroker\nstr 15\ndex 10\nint 7\nStaff of water 89 dmg`;
      assertEqual(test.toString(), res, "Test 3 failed");
      console.log("Test 3 passed");
    }
  
    function test4() {
      console.log("\nTest 4: Character enhanced weapon");
      const test = new Character({name: 'Kroker', strength: 15, intelligence: 7});
      test.axeOfFire(3, 1, 0, 20);
      test.staffOfWater(1, 0, 2, 60);
      test.axeOfFire(1, 2, 1, 10);
      const res = `Kroker\nstr 15\ndex 10\nint 7\nAxe of fire(enhanced) 92 dmg`;
      assertEqual(test.toString(), res, "Test 4 failed");
      console.log("Test 4 passed");
    }
  
    function test5() {
      console.log("\nTest 5: Character stats modifier");
      const test = new Character({name: 'Kroker', strength: 15, intelligence: 7});
      test.axeOfFire(3, 1, 0, 20);
      test.staffOfWater(1, 0, 2, 60);
      test.axeOfFire(1, 2, 1, 10);
      test.strangeFruit(-2, 0, 2);
      const res = `Kroker\nstr 13\ndex 10\nint 9\nStaff of water 91 dmg`;
      assertEqual(test.toString(), res, "Test 5 failed");
      console.log("Test 5 passed");
    }
  
    function test6() {
      console.log("\nTest 6: Show event log");
      const test = new Character({name: 'Kroker', strength: 15, intelligence: 7});
      test.axeOfFire(3, 1, 0, 20);
      test.staffOfWater(1, 0, 2, 60);
      test.axeOfFire(1, 2, 1, 10);
      test.strangeFruit(-2, 0, 2);
      const res = `Kroker finds 'Axe of fire'\nKroker finds 'Staff of water'\nKroker finds 'Axe of fire'\nStrange fruit: strength -2, intelligence +2`; 
      assertEqual(test.eventLog(), res, "Test 6 failed");
      console.log("Test 6 passed");
    }
  
    function test7() {
      console.log("\nTest 7: Character change stat to zero");
      const test = new Character({name: 'Pinky', strength: 5, dexterity: 5, intelligence: 5});
      test.strangeFruit(0, 2, -1);
      test.ancientBook(2, 1, -2);
      test.ancientBook(2, 1, -2);
      const res = `Pinky\nstr 9\ndex 9\nint 0\nlimbs 18 dmg`;
      assertEqual(test.toString(), res, "Test 7 failed");
      console.log("Test 7 passed");
    }
  
    function test8() {
      console.log("\nTest 8: Pick the correct weapon in case of equal damages");
      const test = new Character({name: 'Porky', strength: 15, intelligence: 7});
      test.pillarOfWater(4, 1, 2, 60);
      test.axeOfFire(3, 1, 2, 20);
      test.dunderOfWater(0, 2, 0, 1);
      test.axeOfFire(4, 0, 1, 60);
      test.staffOfWater(4, 1, 2, 60);
      const res = `Porky\nstr 15\ndex 10\nint 7\nAxe of fire(enhanced) 144 dmg`;
      assertEqual(test.toString(), res, "Test 8 failed");
      console.log("Test 8 passed");
    }
  
    // Run all tests
    try {
      test1();
      test2();
      test3();
      test4();
      test5();
      test6();
      test7();
      test8();
      console.log("\nAll tests passed!");
    } catch (error) {
      console.error("\nTest failed:", error.message);
    }
  }
  
  // Run the tests
  runTests();