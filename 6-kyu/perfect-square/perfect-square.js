 
function perfectSquare(string) {
  const lines = string.split('\n');
  for (const line of lines){
    if (line.length !== lines.length) return false;
    for (const item of line) if (item !== '.') return false;
  }
  return true;
}