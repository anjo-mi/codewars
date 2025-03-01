function reverseAndMirror(s1,s2) {
  const reversed = str => {
    return str.split('').reverse().join('');
  };
  const invert = char => {
    return char === char.toLowerCase() 
            ? char.toUpperCase()
            : char.toLowerCase();
  };
  return [reversed(s2.split('').map(invert).join('')),
          reversed(s1.split('').map(invert).join('')) 
          + s1.split('').map(invert).join('')].join('@@@');
  
}