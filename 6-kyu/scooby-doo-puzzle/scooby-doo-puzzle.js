 
function scoobydoo(villain, villains) {
  let s = villain.slice(-5) + villain.slice(0, -5);
  s = s.split('').reverse().join('');
  s = s.split('').map((c, i) => {
    if (i % 2 !== 0) {
      return String.fromCharCode(((c.charCodeAt(0) - 97 + 5) % 26) + 97);
    }
    return c;
  }).join('');
  return villains.find(v => v.split(' ').join('').toLowerCase() === s);
}