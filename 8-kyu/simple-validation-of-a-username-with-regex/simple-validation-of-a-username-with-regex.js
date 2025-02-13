const validateUsr = user => {
  const alpha = 'abcdefghijklmnopqrstuvwxyz_1234567890';
  return (user.length <= 16 && user.length >= 4) && 
         (user.split('').every(el => el === el.toLowerCase())) && 
         (user.split('').every(el => alpha.includes(el)));
}