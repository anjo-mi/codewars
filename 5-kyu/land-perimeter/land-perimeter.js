 
function landPerimeter(arr) {
  let count = 0;
  const directions = [
    [1,0],
    [-1,0],
    [0,-1],
    [0,1]
  ];
  for (let i = 0 ; i < arr.length ; i++){
    for (let j = 0 ; j < arr[i].length ; j++){
      if (arr[i][j] === 'O') continue;
      if (arr[i][j] === 'X'){
        for (let dir of directions){
          const [dx,dy] = dir;
          const newX = i + dx;
          const newY = j + dy;
          
          if (newX < 0 || newX >= arr.length || 
              newY < 0 || newY >= arr[i].length || 
              arr[newX][newY] === 'O'){
            count++;
          }
        }
      }
    }
  }
  return `Total land perimeter: ${count}`;
}