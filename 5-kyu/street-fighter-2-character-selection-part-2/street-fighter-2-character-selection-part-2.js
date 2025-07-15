 
      let i = y + 1 > arr[x].length - 1 ? 0 : y + 1;
      while (arr[x][i] === ''){
        i = i + 1 > arr[x].length - 1 ? 0 : i + 1;
      }
      return [ arr[x][i] , {x,y:i} ];
    },
    
    left: ([x,y]) => {
      let i = y - 1 < 0 ? arr[x].length - 1 : y - 1;
      while (arr[x][i] === ''){
        i = i - 1 < 0 ? arr[x].length - 1 : i - 1;
      }
      return [ arr[x][i] , {x,y:i} ];
    },
    
  };
  
  return directions[dir](p)
}
​
function superStreetFighterSelection(f, pos, moves){
  const movement = [];
  let p = pos;
  moves.forEach(el => {
    const movedTo = switchPos(f,p,el)
    const [ char , {x,y} ] = movedTo;
    movement.push(char);
    p = [x,y]
  })
  return movement;
}
​
// comment if's + uncomment whiles:
//        skips vertical-empty-block if cursor remains in grid