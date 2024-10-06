class Character {
  
    constructor(obj){
      this.name = obj.name || 'Hero'
      this.strength = obj.strength || 10
      this.intelligence = obj.intelligence || 10
      this.dexterity = obj.dexterity || 10
      this.weapon = new Weapon(0,0,0,0, 'limbs')
      this.inventory = [this.weapon]
      this.log = []
      return new Proxy(this, {
        get(target, prop, rec){
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
              let x = target.inventory.find(el => el.name === target.weapon.name)
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
              return target.weapon
            }
          }
          return Reflect.get(target, prop, rec)
        }
      })
    }
  
    characterInfo() {
      let damage = this.strength + this.intelligence + this.dexterity
      if (this.weapon instanceof Weapon && this.weapon.name !== 'limbs'){
        damage = this.weapon.str * this.strength + 
                 this.weapon.dex * this.dexterity + 
                 this.weapon.int * this.intelligence + 
                 this.weapon.pow
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
      
    }
    
    eventLog() {
      return this.log
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