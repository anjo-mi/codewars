function alphabetWar(fight){
    let left = { w:4,p:3,b:2,s:1 }
    let right = { m:4,q:3,d:2,z:1 }
    fight = fight.toLowerCase().split('')
    fight = fight.filter((el,i) => (fight[i-1] !== '*' && fight[i+1] !== '*'))
    let theLeft = fight.reduce((a,el) => a + (left[el] || 0), 0)
    let theRight = fight.reduce((a,el) => a + (right[el] || 0), 0)
    return theLeft > theRight ? 'Left side wins!' : 
           theRight > theLeft ? 'Right side wins!' : 
                                `Let's fight again!`
  }


console.log( alphabetWar("z") , "Right side wins!" );
console.log( alphabetWar("****") , "Let's fight again!" );
console.log( alphabetWar("z*dq*mw*pb*s"), "Let's fight again!" );
console.log( alphabetWar("zdqmwpbs"), "Let's fight again!" );
console.log( alphabetWar("zz*zzs"), "Right side wins!" );
console.log( alphabetWar("sz**z**zs"), "Left side wins!" );
console.log( alphabetWar("z*z*z*zs"), "Left side wins!" );
console.log( alphabetWar("*wwwwww*z*"), "Left side wins!" );