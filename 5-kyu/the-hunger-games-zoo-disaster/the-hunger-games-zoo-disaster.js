  }
  
  let somethingEats = true;
  while (somethingEats){
    somethingEats = false;
    
    for (let i = 0 ; i < animals.length ; i++){
      const animal = animals[i];
      const left = i > 0 ? animals[i-1] : null;
      const right = i < animals.length - 1 ? animals[i+1] : null;
      
      if (left && canEat(animal,left)){
        newZoo.push(eats[animal][left]);
        animals.splice(i-1,1);
        somethingEats = true;
        break;
      }
      
      if(right && canEat(animal,right)){
        newZoo.push(eats[animal][right]);
        animals.splice(i+1,1);
        somethingEats = true;
        break;
      }
    }
  }
  
  return [...newZoo,...animals];
}
​