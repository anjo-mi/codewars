 
function zombieShootout (zombies, range, ammo) {
  let killCount = 0;
  for (let i = 0 ; i < range && ammo > 0 && killCount < zombies ; range -= .5){
    ammo--;
    killCount++;
  }
  
  if (killCount === zombies) return `You shot all ${killCount} zombies.`;
  if (killCount < zombies){
    if (!range) return `You shot ${killCount} zombies before being eaten: overwhelmed.`
    if (!ammo) return `You shot ${killCount} zombies before being eaten: ran out of ammo.`
  }
}