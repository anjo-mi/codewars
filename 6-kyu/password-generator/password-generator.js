 
function passwordGen() {
  let pw = '';
  let length = Math.ceil(Math.random() * 15) + 5;
  const arabic = '0123456789';
  const alphaL = 'abcdefghijklmnopqrstuvwxyz';
  const alphaU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const getRandomLetter = (str) => {
    const pos = Math.floor(Math.random() * str.length);
    return str[pos];
  }
  const options = [arabic, alphaL, alphaU];
  for (let i = 0 ; i < length ; i++){
    const random = Math.floor(Math.random() * 3);
    pw += getRandomLetter(options[random])
  }
  const verify = pw.split('').some(char => arabic.includes(char)) && 
                 pw.split('').some(char => alphaL.includes(char)) && 
                 pw.split('').some(char => alphaU.includes(char))
  if (verify) return pw;
  else return passwordGen()
}