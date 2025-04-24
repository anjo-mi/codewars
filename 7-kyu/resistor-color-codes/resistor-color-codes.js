 
function decodeResistorColors(bands) {
  const code = {black:0,brown:1,red:2,orange:3,yellow:4,green:5,blue:6,violet:7,gray:8,white:9}
  const vals = bands.split(' ').map(band => code[band] || code[band] === 0 ? code[band] : band);
  let ohms = +(`${vals[0]}${vals[1]}`) * 10 ** vals[2]
  if (ohms >= 1e6) ohms = (ohms/1e6) +'M'
  if (ohms >= 1e3) ohms = (ohms/1e3) +'k'
  let tol = 20;
  if (vals[3]){
    tol = vals[3] === 'gold' ? 5 : 10
  }
  return `${ohms} ohms, ${tol}%`
}