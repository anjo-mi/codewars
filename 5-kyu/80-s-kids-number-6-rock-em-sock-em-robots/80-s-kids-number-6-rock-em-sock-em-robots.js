 
function fight(robot1, robot2, tactics) {
  const attack = (tact, target) => {
    target.health -= tactics[tact]
  }
  const checkWin = () => {
    if (robot1.health <= 0) return `${robot2.name} has won the fight.`
    if (robot2.health <= 0) return `${robot1.name} has won the fight.`
  }
  let firstAttack = robot1.speed >= robot2.speed ? 0 : 1;
  while (robot1.tactics.length || robot2.tactics.length){
    if (firstAttack % 2 === 0){
      const move = robot1.tactics.shift();
      if (move) attack(move,robot2);
    }else if (firstAttack % 2 === 1){
      const move = robot2.tactics.shift();
      if (move) attack(move,robot1);
    }
    if (checkWin()) return checkWin();
    firstAttack++;
  }
  return robot1.health > robot2.health 
            ? `${robot1.name} has won the fight.`
        :robot2.health > robot1.health 
            ? `${robot2.name} has won the fight.`
            : `The fight was a draw.`
}