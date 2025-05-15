 
function isValid(idn) {
  const arabic = 'abcdefghijklmnopqrstuvwxyz_$';
  const accept = 'abcdefghijklmnopqrstuvwxyz_$0123456789';
  if (!idn || !arabic.includes(idn[0].toLowerCase())) return false;
  return idn.split('').every(char => accept.includes(char.toLowerCase()));
}