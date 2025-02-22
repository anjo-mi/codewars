var whoEatsWho = function(zoo) {
  const eats = {
    antelope: {grass: 'antelope eats grass'},
    ['big-fish']: {['little-fish']: 'big-fish eats little-fish'},
    bug: {leaves: 'bug eats leaves'},
    bear: {
      ['big-fish']: 'bear eats big-fish',
      bug: 'bear eats bug',
      chicken: 'bear eats chicken',
      cow: 'bear eats cow',
      leaves: 'bear eats leaves',
      sheep: 'bear eats sheep'
    },
    chicken: {bug: 'chicken eats bug'},
    cow: {grass: 'cow eats grass'},
    fox: {
      chicken: 'fox eats chicken',
      sheep: 'fox eats sheep',
    },
    giraffe: {leaves: 'giraffe eats leaves'},
    lion: {
      antelope: 'lion eats antelope',
      cow: 'lion eats cow'
    },
    panda: {leaves: 'panda eats leaves'},
    sheep: {grass: 'sheep eats grass'}
  };
  const newZoo = [zoo];
  let animals = zoo.split(',');
  
  function canEat(animal, food){
    return eats[animal] && eats[animal][food];
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
  
  return [...newZoo,animals.join(',')];
}​
