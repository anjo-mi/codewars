 
function hexColor(codes) {
  const [r,g,b] = codes.split(' ');
  if (!r || !g || !b || [r,g,b].every(code => code.split('').every(val => val === '0'))) return 'black';
  if (r === g && g === b) return 'white';
  let max = +r > +b && +r > +g ? 'red'
           :+b > +r && +b > +g ? 'blue'
           :+g > +r && +g > +b ? 'green'
           :+g === +b ? 'cyan'
           :+r === +b ? 'magenta'
           :+g === +r ? 'yellow' : 'incorrect entry';
  return max;
}