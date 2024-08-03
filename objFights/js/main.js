function declareWinner(f1, f2, first) {
    function objFight(obj1, obj2){
      while(obj1.health > 0 && obj2.health > 0){
        obj2.health -= obj1.damagePerAttack
        if (obj2.health <= 0){
          return obj1.toString()
        }
        obj1.health -= obj2.damagePerAttack
        if (obj1.health <= 0){
          return obj2.toString()
        }
      }
    }  
    if (first === f1.name){
      return objFight(f1,f2)
    }else{
      return objFight(f2,f1)
    }
  }