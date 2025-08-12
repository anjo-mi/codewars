 
function robot(scan) {
  return scan.map(r => r.map(sp => sp === 'X' ? '*' : sp));
}