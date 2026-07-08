 
function displayBoard(board, width){
  let count = 0;
  let total = 0
  let str = '';
  for (const place of board){
    if (total === board.length - 1) str += ` ${place} `;
    else if (count === width - 1){
      str += ` ${place} ` + '\n' + '-'.repeat(width * 4 - 1) + '\n';
      count = 0;
    }else {
      str += ` ${place} |`;
      count++;
    }
    total++;
  }
  return str;
}