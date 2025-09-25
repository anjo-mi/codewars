function alphabetWar(fight){
  const left = {w:4,p:3,b:2,s:1,t:0};
  const right = {m:-4,q:-3,d:-2,z:-1,j:0};
  const wizards = new Set( 'jt' );
  let total = 0;
  
  const benedictArnold = (str,i,oppoSide, side) =>{
    const front = i - 1 >= 0 && str[i-1] in oppoSide && wizards.has(str[i-1]);
    const back  = i + 1 >= 0 && str[i+1] in oppoSide && wizards.has(str[i+1]);
    
    let saved = false;
    if (front || back){
      const f = i - 1 >= 0 && str[i-1] in side && wizards.has(str[i-1]);
      const b = i + 1 >= 0 && str[i+1] in side && wizards.has(str[i+1]);
      if (f || b) saved = true;
    }
    return (front || back) && !saved
  }
  
  for (let i = 0 ; i < fight.length ; i++){
    if (!(fight[i] in left) && !(fight[i] in right)) continue;
    const oppoSide = (fight[i] in left) ? right : left;
    const side = oppoSide === left ? right : left;
    const traitor = benedictArnold(fight, i, oppoSide, side)
    total += traitor ? (side[fight[i]] * - 1) : side[fight[i]];
  }
  
  return !total
            ? "Let's fight again!"
         :total < 0
            ? "Right side wins!"
            : "Left side wins!";
}
​
​