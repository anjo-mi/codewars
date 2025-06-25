function sexyName(name) {
  const score = name.toUpperCase().split('').reduce((a,el) => a += SCORES[el] || 0, 0);
  return  score <= 60 ? 'NOT TOO SEXY' :
          61 <= score && score <= 300 ? 'PRETTY SEXY' :
          301 <= score && score <= 599 ? 'VERY SEXY' :
          score >= 600 ? 'THE ULTIMATE SEXIEST' : null;
}