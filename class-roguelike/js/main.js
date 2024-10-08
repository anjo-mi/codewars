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
              target.chooseWeapon(target.inventory)
              return target.weapon
            }
          }
          return Reflect.get(target, prop, rec)
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
    
    strangeFruit(a,b,c){
      console.log(a,this.strength,b,this.dexterity, c, this.intelligence)
      let str = ''
      let newStats = []
      this.strength = Math.max(0, this.strength + a)
      this.dexterity = Math.max(0, this.dexterity + b)
      this.intelligence = Math.max(0, this.intelligence + c)
      function addSign(num){
        if (num > 0) return '+' + num
        if (num < 0) return num.toString()
      }
      if (a || b || c) str = 'Strange fruit: '
      if (a) newStats.push(`strength ${addSign(a)}`)
      if (b) newStats.push(`dexterity ${addSign(b)}`)
      if (c) newStats.push(`intelligence ${addSign(c)}`)
      str = str + newStats.join(', ')
      if (str) this.log.push(str)
      
      console.log(a,this.strength,b,this.dexterity, c, this.intelligence)
      this.chooseWeapon(this.inventory)
      
    }
    
    ancientBook(a,b,c){
      console.log(a,b,c)
      this.strength = Math.max(0, this.strength + a)
      this.dexterity = Math.max(0, this.dexterity + b)
      this.intelligence = Math.max(0, this.intelligence + c)
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